export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Homeschool Mom',
      avatar: '👩‍🏫',
      content: 'MiniMinds has been a lifesaver for our homeschool curriculum! My 7-year-old loves the coloring sheets and the lessons are perfectly age-appropriate.'
    },
    {
      name: 'David L.',
      role: 'Elementary Teacher',
      avatar: '👨‍🏫',
      content: 'I use MiniMinds to create supplemental worksheets for my classroom. The quality is amazing and it saves me hours of preparation time!'
    },
    {
      name: 'Maria R.',
      role: 'Parent of 3',
      avatar: '👩‍👧‍👦',
      content: 'Finally, educational content that keeps all my kids (ages 5, 8, and 10) engaged. The age adjustment feature is brilliant!'
    }
  ]

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-kids text-gray-800 mb-4">
            💝 What Families Say
          </h2>
          <p className="text-xl text-gray-600 font-comic">
            Join thousands of happy parents and teachers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 font-comic italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex text-yellow-400 mt-4">
                {'⭐'.repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
