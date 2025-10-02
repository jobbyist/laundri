import './CategorySection.css'

interface CategorySectionProps {
  onAIClick: () => void
}

interface Category {
  name: string
  image: string
  link: string
}

const categories: Category[] = [
  { name: 'Headwear', image: '/headwear.jpg', link: 'https://github.com/jobbyist/laundri-app' },
  { name: 'Shirts', image: '/tshirt.jpg', link: 'https://github.com/jobbyist/laundri-app' },
  { name: 'Pants', image: '/denim.jpg', link: 'https://github.com/jobbyist/laundri-app' },
  { name: 'Jackets', image: '/jackets.jpg', link: 'https://github.com/jobbyist/laundri-app' },
  { name: 'Footwear', image: '/footwear.jpg', link: 'https://github.com/jobbyist/laundri-app' },
  { name: 'Underwear', image: '/essentials.jpg', link: 'https://github.com/jobbyist/laundri-app' }
]

function CategorySection({ onAIClick }: CategorySectionProps) {
  return (
    <>
      <section className="home-tape-section">
        <div className="ai-banner-section">
          <div className="ai-banner-content">
            <h1 className="ai-banner-title">AI-Powered Fashion Label Creation</h1>
            <p className="ai-banner-description">
              Create your fashion label/brand or collection, design products using pre-made fabrics 
              and templates, connect with on-demand suppliers like Printful and AliExpress
            </p>
            <button className="ai-banner-button" onClick={onAIClick}>
              Launch AI Designer Chat
            </button>
          </div>
        </div>
        
        <div className="sliding-tapes-home">
          {categories.map((category, idx) => (
            <div key={idx} className="sliding-tapes-home-item">
              <div className="home-tape-width-20k">
                <div className="home-tape-scroller">
                  <div className="home-tape-stack">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="home-tape-container">
                        <div className="tape-home-image-wrapper">
                          <img 
                            src={category.image} 
                            loading="lazy" 
                            alt={category.name} 
                            className="home-tape-image"
                          />
                        </div>
                        <a 
                          href={category.link} 
                          className="tape-home-typography"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {category.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CategorySection
