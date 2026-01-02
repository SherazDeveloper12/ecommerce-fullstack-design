import React from 'react'
import { Truck, Globe, Shield, Users, Package, Settings, TrendingUp, Handshake } from 'lucide-react'

export default function About() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <h1 className='text-5xl font-bold mb-6'>About Us</h1>
          <p className='text-xl max-w-3xl'>
            Your trusted global marketplace connecting buyers with quality products and reliable suppliers worldwide.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        
        {/* Who We Are Section */}
        <section className='mb-16'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800'>Who We Are</h2>
          <div className='bg-white rounded-lg shadow-md p-8'>
            <p className='text-lg text-gray-700 mb-4'>
              We are a leading full-stack e-commerce platform dedicated to revolutionizing the way people shop online. 
              Founded with the vision of creating a seamless connection between customers and quality products from around 
              the world, we've grown into a comprehensive marketplace that serves millions of satisfied customers globally.
            </p>
            <p className='text-lg text-gray-700 mb-4'>
              Our platform combines cutting-edge technology with exceptional customer service to deliver an unmatched 
              shopping experience. From electronics and gadgets to home furniture and fashion, we curate the best products 
              from verified suppliers across 10+ countries.
            </p>
            <p className='text-lg text-gray-700'>
              We believe in transparency, quality, and customer satisfaction above all else. Every product on our platform 
              goes through rigorous quality checks, and every supplier is carefully vetted to ensure you receive only the best.
            </p>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className='mb-16'>
          <h2 className='text-4xl font-bold mb-8 text-gray-800'>What We Offer</h2>
          
          {/* Product Categories */}
          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
              <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
                <Package className='text-blue-600' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-3 text-gray-800'>Consumer Electronics</h3>
              <p className='text-gray-600'>
                Latest smartphones, laptops, tablets, smartwatches, gaming consoles, cameras, and audio devices from 
                top brands like Apple, Samsung, OnePlus, Canon, and more. All products are tested and come with warranty options.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
              <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
                <Settings className='text-green-600' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-3 text-gray-800'>Home & Outdoor Furniture</h3>
              <p className='text-gray-600'>
                Premium furniture including sofas, chairs, tables, and outdoor furniture. Kitchen appliances like 
                blenders, coffee makers, mixers, and complete dish sets. Transform your living spaces with our 
                quality home solutions.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow'>
              <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
                <Users className='text-purple-600' size={32} />
              </div>
              <h3 className='text-2xl font-bold mb-3 text-gray-800'>Fashion & Lifestyle</h3>
              <p className='text-gray-600'>
                Curated collections of clothing, accessories, and lifestyle products. From everyday essentials to 
                premium fashion items, we offer styles for every occasion and preference.
              </p>
            </div>
          </div>

          {/* Product Conditions */}
          <div className='bg-white rounded-lg shadow-md p-8 mb-8'>
            <h3 className='text-2xl font-bold mb-4 text-gray-800'>Product Conditions & Quality</h3>
            <div className='grid md:grid-cols-3 gap-4'>
              <div className='border-l-4 border-green-500 pl-4'>
                <h4 className='font-bold text-lg mb-2 text-gray-800'>Brand New</h4>
                <p className='text-gray-600'>Factory-sealed products with full manufacturer warranty</p>
              </div>
              <div className='border-l-4 border-blue-500 pl-4'>
                <h4 className='font-bold text-lg mb-2 text-gray-800'>Refurbished</h4>
                <p className='text-gray-600'>Professionally restored, tested, and certified products at great prices</p>
              </div>
              <div className='border-l-4 border-orange-500 pl-4'>
                <h4 className='font-bold text-lg mb-2 text-gray-800'>Used - Like New</h4>
                <p className='text-gray-600'>Gently used items in excellent condition with quality guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Customers Can Do Section */}
        <section className='mb-16'>
          <h2 className='text-4xl font-bold mb-8 text-gray-800'>What You Can Do On Our Platform</h2>
          
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <div className='flex items-start mb-4'>
                <div className='bg-blue-100 p-3 rounded-lg mr-4'>
                  <Truck className='text-blue-600' size={24} />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2 text-gray-800'>Smart Shopping Experience</h3>
                  <ul className='text-gray-600 space-y-2'>
                    <li>• Browse thousands of products across multiple categories</li>
                    <li>• Filter by brand, price, condition, ratings, and features</li>
                    <li>• View detailed product specifications and high-quality images</li>
                    <li>• Read verified customer reviews and ratings</li>
                    <li>• Compare similar products side-by-side</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6'>
              <div className='flex items-start mb-4'>
                <div className='bg-green-100 p-3 rounded-lg mr-4'>
                  <Package className='text-green-600' size={24} />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2 text-gray-800'>Personalized Services</h3>
                  <ul className='text-gray-600 space-y-2'>
                    <li>• Create wishlists and save favorite items</li>
                    <li>• Get personalized product recommendations</li>
                    <li>• Receive exclusive deals and discounts</li>
                    <li>• Subscribe to our newsletter for latest updates</li>
                    <li>• Track your orders in real-time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6'>
              <div className='flex items-start mb-4'>
                <div className='bg-purple-100 p-3 rounded-lg mr-4'>
                  <Handshake className='text-purple-600' size={24} />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2 text-gray-800'>Request Quotes & Customization</h3>
                  <ul className='text-gray-600 space-y-2'>
                    <li>• Request bulk order quotes directly from suppliers</li>
                    <li>• Customize products to your specifications</li>
                    <li>• Negotiate pricing for large quantities</li>
                    <li>• Source products from specific industry hubs</li>
                    <li>• Get expert consultation for your needs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-md p-6'>
              <div className='flex items-start mb-4'>
                <div className='bg-red-100 p-3 rounded-lg mr-4'>
                  <Shield className='text-red-600' size={24} />
                </div>
                <div>
                  <h3 className='text-xl font-bold mb-2 text-gray-800'>Secure & Convenient</h3>
                  <ul className='text-gray-600 space-y-2'>
                    <li>• Secure payment processing with multiple payment options</li>
                    <li>• Buyer protection on all purchases</li>
                    <li>• Easy returns and refunds policy</li>
                    <li>• 24/7 customer support</li>
                    <li>• Encrypted transactions for your safety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Manage Section */}
        <section className='mb-16'>
          <h2 className='text-4xl font-bold mb-8 text-gray-800'>How We Manage Everything</h2>
          
          <div className='bg-white rounded-lg shadow-md p-8 mb-8'>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <div className='flex items-center mb-4'>
                  <Globe className='text-blue-600 mr-4' size={32} />
                  <h3 className='text-2xl font-bold text-gray-800'>Global Supplier Network</h3>
                </div>
                <p className='text-gray-600 mb-4'>
                  We maintain partnerships with verified suppliers across 10+ countries including the USA, UK, Germany, 
                  France, Italy, China, Russia, Australia, UAE, and Denmark. Each supplier undergoes strict vetting 
                  processes to ensure reliability and quality.
                </p>
                <p className='text-gray-600'>
                  Our global network allows us to source products directly from industry hubs, ensuring competitive 
                  pricing and authentic products.
                </p>
              </div>

              <div>
                <div className='flex items-center mb-4'>
                  <Shield className='text-green-600 mr-4' size={32} />
                  <h3 className='text-2xl font-bold text-gray-800'>Quality Assurance</h3>
                </div>
                <p className='text-gray-600 mb-4'>
                  Every product undergoes comprehensive monitoring and inspection before reaching our customers. 
                  We have dedicated quality control teams that verify product authenticity, functionality, and condition.
                </p>
                <p className='text-gray-600'>
                  Our rigorous testing protocols ensure that refurbished items meet our high standards, and all 
                  new products are verified to be genuine.
                </p>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div className='bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6'>
              <Truck size={40} className='mb-4' />
              <h3 className='text-xl font-bold mb-3'>Logistics & Shipping</h3>
              <p className='text-blue-100'>
                Fast, reliable shipping by ocean or air. We partner with leading logistics providers to ensure 
                timely delivery. Track your package every step of the way with our real-time tracking system.
              </p>
            </div>

            <div className='bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6'>
              <TrendingUp size={40} className='mb-4' />
              <h3 className='text-xl font-bold mb-3'>Inventory Management</h3>
              <p className='text-green-100'>
                Advanced inventory systems track stock levels in real-time across multiple warehouses. Automated 
                alerts ensure popular items stay in stock, and our AI predicts demand to optimize availability.
              </p>
            </div>

            <div className='bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6'>
              <Settings size={40} className='mb-4' />
              <h3 className='text-xl font-bold mb-3'>Technology Stack</h3>
              <p className='text-purple-100'>
                Built with cutting-edge React technology and modern web standards. Our platform is fast, responsive, 
                and optimized for all devices. Regular updates ensure security and new features.
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md p-8'>
            <h3 className='text-2xl font-bold mb-6 text-gray-800'>Our Extra Services</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div className='border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors'>
                <div className='font-bold text-gray-800 mb-2'>Source from Industry Hubs</div>
                <p className='text-sm text-gray-600'>Direct sourcing from manufacturing centers worldwide</p>
              </div>
              <div className='border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors'>
                <div className='font-bold text-gray-800 mb-2'>Customize Your Products</div>
                <p className='text-sm text-gray-600'>Tailor products to your exact specifications</p>
              </div>
              <div className='border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors'>
                <div className='font-bold text-gray-800 mb-2'>Fast, Reliable Shipping</div>
                <p className='text-sm text-gray-600'>Ocean or air freight options for every need</p>
              </div>
              <div className='border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors'>
                <div className='font-bold text-gray-800 mb-2'>Product Monitoring</div>
                <p className='text-sm text-gray-600'>Comprehensive inspection before delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className='mb-16'>
          <h2 className='text-4xl font-bold mb-8 text-gray-800'>Our Commitment</h2>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-xl p-8'>
            <div className='grid md:grid-cols-3 gap-8 mb-8'>
              <div className='text-center'>
                <div className='text-5xl font-bold mb-2'>10+</div>
                <div className='text-blue-100 text-lg'>Countries Covered</div>
              </div>
              <div className='text-center'>
                <div className='text-5xl font-bold mb-2'>1000+</div>
                <div className='text-blue-100 text-lg'>Products Available</div>
              </div>
              <div className='text-center'>
                <div className='text-5xl font-bold mb-2'>24/7</div>
                <div className='text-blue-100 text-lg'>Customer Support</div>
              </div>
            </div>
            <p className='text-center text-xl text-blue-50'>
              We're committed to providing exceptional service, quality products, and a seamless shopping 
              experience that exceeds your expectations every time.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className='mb-16'>
          <h2 className='text-4xl font-bold mb-8 text-gray-800 text-center'>Our Core Values</h2>
          <div className='grid md:grid-cols-4 gap-6'>
            <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow'>
              <div className='text-4xl mb-4'>🎯</div>
              <h3 className='text-xl font-bold mb-2 text-gray-800'>Quality First</h3>
              <p className='text-gray-600'>Every product meets our stringent quality standards</p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow'>
              <div className='text-4xl mb-4'>🤝</div>
              <h3 className='text-xl font-bold mb-2 text-gray-800'>Trust & Transparency</h3>
              <p className='text-gray-600'>Honest communication and clear policies</p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow'>
              <div className='text-4xl mb-4'>⚡</div>
              <h3 className='text-xl font-bold mb-2 text-gray-800'>Innovation</h3>
              <p className='text-gray-600'>Cutting-edge technology for better experience</p>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow'>
              <div className='text-4xl mb-4'>💚</div>
              <h3 className='text-xl font-bold mb-2 text-gray-800'>Customer Success</h3>
              <p className='text-gray-600'>Your satisfaction is our top priority</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='text-center'>
          <div className='bg-white rounded-lg shadow-lg p-12'>
            <h2 className='text-3xl font-bold mb-4 text-gray-800'>Ready to Start Shopping?</h2>
            <p className='text-xl text-gray-600 mb-8'>
              Join thousands of satisfied customers and experience the future of online shopping today.
            </p>
            <div className='flex gap-4 justify-center'>
              <a href='/' className='bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors'>
                Browse Products
              </a>
              <a href='/suppliers' className='bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors'>
                View Suppliers
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
