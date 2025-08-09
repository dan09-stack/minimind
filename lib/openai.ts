import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'sk-dummy',
})

export interface ContentRequest {
  subject: string
  topic: string
  age: number
  questionCount: number
  outputs: {
    lesson: boolean
    puzzle: boolean
    coloring: boolean
  }
}

export interface GeneratedContent {
  lesson?: {
    title: string
    content: string
    questions: Array<{
      question: string
      options: string[]
      correct: number
      explanation: string
    }>
    answerKey: string
  }
  puzzle?: {
    title: string
    words: string[]
    grid: string[][]
    instructions: string
  }
  coloring?: {
    title: string
    description: string
    imageUrl: string
  }
}

export async function generateLesson(request: ContentRequest): Promise<GeneratedContent['lesson']> {
  const ageGroup = getAgeGroup(request.age)
  
  const prompt = `Create an educational mini-lesson about "${request.topic}" in the subject "${request.subject}" for ${ageGroup} children (age ${request.age}).

The lesson should include:
1. A brief, engaging introduction (2-3 sentences)
2. Main content with 3-4 key learning points
3. ${request.questionCount} multiple choice questions with 4 options each
4. Answer explanations that are age-appropriate

Make the language appropriate for a ${request.age}-year-old, using simple vocabulary and engaging examples.

Respond in this JSON format:
{
  "title": "Lesson title",
  "content": "Main lesson content with key points",
  "questions": [
    {
      "question": "Question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "Why this is correct"
    }
  ],
  "answerKey": "Answer key summary"
}`

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  })

  const content = response.choices[0].message.content
  if (!content) throw new Error('No content generated')

  return JSON.parse(content)
}

export async function generateWordSearch(request: ContentRequest): Promise<GeneratedContent['puzzle']> {
  const ageGroup = getAgeGroup(request.age)
  
  const prompt = `Create a word search puzzle about "${request.topic}" in the subject "${request.subject}" for ${ageGroup} children (age ${request.age}).

Generate 10-15 key vocabulary words related to the topic. Words should be appropriate for the age level.

Respond in this JSON format:
{
  "title": "Word Search: [Topic]",
  "words": ["word1", "word2", "word3", ...],
  "instructions": "Find these words hidden in the puzzle below. Words can be horizontal, vertical, or diagonal.",
  "grid": [["A", "B", "C", ...], ["D", "E", "F", ...], ...]
}

Create a 15x15 grid with the words hidden in various directions. Fill empty spaces with random letters.`

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  })

  const content = response.choices[0].message.content
  if (!content) throw new Error('No content generated')

  return JSON.parse(content)
}

export async function generateColoringSheet(request: ContentRequest): Promise<GeneratedContent['coloring']> {
  const ageGroup = getAgeGroup(request.age)
  
  const imagePrompt = `A simple, child-friendly black and white line drawing coloring page about ${request.topic} (${request.subject}). The image should be:
- Simple outlines with thick black lines
- No shading or gray areas
- Large, clear areas for coloring
- Age-appropriate for ${request.age}-year-old children
- Educational and engaging
- No text or words in the image
- Clean white background`

  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: imagePrompt,
    size: '1024x1024',
    quality: 'standard',
    n: 1,
  })

  const imageUrl = response.data?.[0]?.url
  if (!imageUrl) throw new Error('No image generated')

  return {
    title: `${request.topic} Coloring Sheet`,
    description: `A fun coloring page featuring ${request.topic} designed for ${ageGroup} children.`,
    imageUrl,
  }
}

function getAgeGroup(age: number): string {
  if (age <= 5) return 'preschool'
  if (age <= 7) return 'early elementary'
  if (age <= 9) return 'elementary'
  return 'late elementary'
}

export async function generateContent(request: ContentRequest): Promise<GeneratedContent> {
  const results: GeneratedContent = {}

  const promises = []

  if (request.outputs.lesson) {
    promises.push(
      generateLesson(request).then(lesson => {
        results.lesson = lesson
      })
    )
  }

  if (request.outputs.puzzle) {
    promises.push(
      generateWordSearch(request).then(puzzle => {
        results.puzzle = puzzle
      })
    )
  }

  if (request.outputs.coloring) {
    promises.push(
      generateColoringSheet(request).then(coloring => {
        results.coloring = coloring
      })
    )
  }

  await Promise.all(promises)
  return results
}
