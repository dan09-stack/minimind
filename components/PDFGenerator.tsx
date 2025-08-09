'use client'

import { useState } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

interface PDFGeneratorProps {
  generation: any
}

export function PDFGenerator({ generation }: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async (type: 'all' | 'lesson' | 'puzzle' | 'coloring') => {
    setIsGenerating(true)
    
    try {
      const pdf = new jsPDF('p', 'mm', 'a4')
      let pageNumber = 1

      if ((type === 'all' || type === 'lesson') && generation.content.lesson) {
        await addLessonToPDF(pdf, generation.content.lesson, pageNumber)
        pageNumber++
      }

      if ((type === 'all' || type === 'puzzle') && generation.content.puzzle) {
        if (pageNumber > 1) pdf.addPage()
        await addPuzzleToPDF(pdf, generation.content.puzzle, pageNumber)
        pageNumber++
      }

      if ((type === 'all' || type === 'coloring') && generation.content.coloring) {
        if (pageNumber > 1) pdf.addPage()
        await addColoringToPDF(pdf, generation.content.coloring, pageNumber)
      }

      const filename = `${generation.topic.replace(/\s+/g, '_')}_${type}_age${generation.age}.pdf`
      pdf.save(filename)
    } catch (error) {
      console.error('PDF generation error:', error)
      alert('Failed to generate PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const addLessonToPDF = async (pdf: jsPDF, lesson: any, pageNumber: number) => {
    const margin = 20
    let yPosition = margin

    // Header
    pdf.setFontSize(24)
    pdf.setFont('helvetica', 'bold')
    pdf.text('📖 Mini Lesson', margin, yPosition)
    yPosition += 15

    // Title
    pdf.setFontSize(18)
    pdf.text(lesson.title, margin, yPosition)
    yPosition += 15

    // Content
    pdf.setFontSize(12)
    pdf.setFont('helvetica', 'normal')
    const contentLines = pdf.splitTextToSize(lesson.content, 170)
    pdf.text(contentLines, margin, yPosition)
    yPosition += contentLines.length * 5 + 10

    // Questions
    pdf.setFontSize(16)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Questions:', margin, yPosition)
    yPosition += 10

    lesson.questions.forEach((q: any, i: number) => {
      if (yPosition > 250) {
        pdf.addPage()
        yPosition = margin
      }

      pdf.setFontSize(12)
      pdf.setFont('helvetica', 'bold')
      pdf.text(`${i + 1}. ${q.question}`, margin, yPosition)
      yPosition += 8

      pdf.setFont('helvetica', 'normal')
      q.options.forEach((option: string, j: number) => {
        const prefix = String.fromCharCode(65 + j)
        pdf.text(`   ${prefix}. ${option}`, margin, yPosition)
        yPosition += 6
      })
      yPosition += 5
    })

    // Answer key
    if (yPosition > 220) {
      pdf.addPage()
      yPosition = margin
    }

    pdf.setFontSize(14)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Answer Key:', margin, yPosition)
    yPosition += 8

    pdf.setFontSize(10)
    pdf.setFont('helvetica', 'normal')
    lesson.questions.forEach((q: any, i: number) => {
      const answerLetter = String.fromCharCode(65 + q.correct)
      pdf.text(`${i + 1}. ${answerLetter} - ${q.explanation}`, margin, yPosition)
      yPosition += 6
    })
  }

  const addPuzzleToPDF = async (pdf: jsPDF, puzzle: any, pageNumber: number) => {
    const margin = 20
    let yPosition = margin

    // Header
    pdf.setFontSize(24)
    pdf.setFont('helvetica', 'bold')
    pdf.text('🧩 Word Search', margin, yPosition)
    yPosition += 15

    // Title
    pdf.setFontSize(18)
    pdf.text(puzzle.title, margin, yPosition)
    yPosition += 15

    // Instructions
    pdf.setFontSize(12)
    pdf.setFont('helvetica', 'normal')
    pdf.text(puzzle.instructions, margin, yPosition)
    yPosition += 15

    // Words to find
    pdf.setFontSize(14)
    pdf.setFont('helvetica', 'bold')
    pdf.text('Words to find:', margin, yPosition)
    yPosition += 8

    pdf.setFontSize(10)
    pdf.setFont('helvetica', 'normal')
    
    const wordsPerRow = 3
    let currentRow = 0
    let currentCol = 0
    
    puzzle.words.forEach((word: string, i: number) => {
      const xPos = margin + (currentCol * 60)
      pdf.text(word, xPos, yPosition + (currentRow * 6))
      
      currentCol++
      if (currentCol >= wordsPerRow) {
        currentCol = 0
        currentRow++
      }
    })

    yPosition += Math.ceil(puzzle.words.length / wordsPerRow) * 6 + 10

    // Grid
    const cellSize = 8
    const gridSize = puzzle.grid.length
    const gridStartX = margin + (170 - gridSize * cellSize) / 2
    
    pdf.setFontSize(8)
    pdf.setFont('helvetica', 'normal')
    
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const x = gridStartX + col * cellSize
        const y = yPosition + row * cellSize
        
        // Draw cell border
        pdf.rect(x, y, cellSize, cellSize)
        
        // Add letter
        const letter = puzzle.grid[row][col]
        pdf.text(letter, x + cellSize/2 - 1, y + cellSize/2 + 1)
      }
    }
  }

  const addColoringToPDF = async (pdf: jsPDF, coloring: any, pageNumber: number) => {
    const margin = 20
    let yPosition = margin

    // Header
    pdf.setFontSize(24)
    pdf.setFont('helvetica', 'bold')
    pdf.text('🎨 Coloring Sheet', margin, yPosition)
    yPosition += 15

    // Title
    pdf.setFontSize(18)
    pdf.text(coloring.title, margin, yPosition)
    yPosition += 15

    // Description
    pdf.setFontSize(12)
    pdf.setFont('helvetica', 'normal')
    pdf.text(coloring.description, margin, yPosition)
    yPosition += 15

    // Add image
    try {
      const response = await fetch(coloring.imageUrl)
      const blob = await response.blob()
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      
      await new Promise((resolve) => {
        img.onload = resolve
        img.src = URL.createObjectURL(blob)
      })
      
      canvas.width = img.width
      canvas.height = img.height
      ctx?.drawImage(img, 0, 0)
      
      const imgData = canvas.toDataURL('image/jpeg', 0.8)
      const imgWidth = 170
      const imgHeight = (img.height * imgWidth) / img.width
      
      pdf.addImage(imgData, 'JPEG', margin, yPosition, imgWidth, imgHeight)
    } catch (error) {
      console.error('Failed to add image to PDF:', error)
      pdf.text('Image could not be loaded', margin, yPosition)
    }
  }

  return (
    <div className="space-y-4">
      {generation.content.lesson && (
        <button
          onClick={() => generatePDF('lesson')}
          disabled={isGenerating}
          className="w-full btn-primary py-3 disabled:opacity-50"
        >
          📖 Download Lesson PDF
        </button>
      )}

      {generation.content.puzzle && (
        <button
          onClick={() => generatePDF('puzzle')}
          disabled={isGenerating}
          className="w-full btn-primary py-3 disabled:opacity-50"
        >
          🧩 Download Puzzle PDF
        </button>
      )}

      {generation.content.coloring && (
        <button
          onClick={() => generatePDF('coloring')}
          disabled={isGenerating}
          className="w-full btn-primary py-3 disabled:opacity-50"
        >
          🎨 Download Coloring PDF
        </button>
      )}

      <button
        onClick={() => generatePDF('all')}
        disabled={isGenerating}
        className="w-full btn-accent py-4 text-lg disabled:opacity-50"
      >
        {isGenerating ? 'Generating...' : '📥 Download All PDFs'}
      </button>
    </div>
  )
}
