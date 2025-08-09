export function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Content',
      description: 'Advanced AI creates educational content tailored to your child\'s age and learning level'
    },
    {
      icon: '📱',
      title: 'Instant Generation',
      description: 'Get printable content in seconds - no waiting, no complicated setup'
    },
    {
      icon: '🎯',
      title: 'Age-Appropriate',
      description: 'Content automatically adjusts difficulty and vocabulary for ages 4-12'
    },
    {
      icon: '📄',
      title: 'Print-Ready PDFs',
      description: 'High-quality PDFs optimized for home and classroom printing'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Colorful, engaging layouts that kids love and parents trust'
    },
    {
      icon: '🔄',
      title: 'Unlimited Topics',
      description: 'From dinosaurs to space exploration - generate content on any subject'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-kids text-gray-800 mb-4">
          🌟 Why Parents Love MiniMinds
        </h2>
        <p className="text-xl text-gray-600 font-comic max-w-3xl mx-auto">
          We make learning fun, engaging, and effortless for both kids and parents
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="card text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600 font-comic">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
