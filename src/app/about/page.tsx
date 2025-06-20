// src/app/about/page.tsx
import React from 'react';
import { Heart, Star, Users, Award, Clock, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#CC5500] to-[#FF7A00] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-yellow-300 w-10 h-10 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              The Bantu Baby Story
            </h1>
            <Sparkles className="text-yellow-300 w-10 h-10 ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto">
            From a simple observation to a movement that's dressing Africa's future leaders 
            in pride, heritage, and beauty.
          </p>
          <div className="bg-black bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-yellow-100 italic">
              "Every child deserves to wear their heritage with pride"
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                It Started with a Simple Question...
              </h2>
              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                  In 2020, a young entrepreneur looked around and noticed something was missing. 
                  While beautiful African kitenge adorned adults everywhere, children were left out 
                  of this cultural celebration.
                </p>
                <p>
                  <span className="font-semibold text-[#CC5500]">"Where is the kitenge for kids?"</span> 
                  she wondered. That simple question sparked an idea that would grow into something extraordinary.
                </p>
                <p>
                  She realized that children - the future of Africa - deserved to grow up connected 
                  to their roots, proud of their heritage, and confident in their identity. 
                  And what better way than through the beautiful, vibrant fabrics that tell our stories?
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#CC5500] to-[#FF7A00] rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4">The "Aha!" Moment</h3>
                <p className="text-lg italic">
                  "If we want our children to be proud of who they are, 
                  we need to dress them in their heritage from day one."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              From Dream to Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how a simple idea transformed into a thriving business that's 
              touching hearts and building confidence across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 2020 - The Beginning */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="bg-[#CC5500] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2020
              </div>
              <h3 className="text-xl font-bold text-black mb-3">The Spark</h3>
              <p className="text-gray-600 mb-4">
                A young entrepreneur notices the gap in children's African fashion 
                and decides to take action.
              </p>
              <div className="text-4xl">🌱</div>
            </div>

            {/* 2021-2023 - Growth */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="bg-[#CC5500] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2021
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Building Dreams</h3>
              <p className="text-gray-600 mb-4">
                First designs come to life. Word spreads. Parents fall in love. 
                Children start wearing their heritage with pride.
              </p>
              <div className="text-4xl">🚀</div>
            </div>

            {/* 2024 - Today */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="bg-[#CC5500] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2024
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Thriving Impact</h3>
              <p className="text-gray-600 mb-4">
                Hundreds of children dressed in beautiful kitenge, 
                connecting with their roots and walking tall with confidence.
              </p>
              <div className="text-4xl">👑</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What drives us every day as we create beautiful clothes for Africa's future leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#CC5500] to-[#FF7A00] rounded-2xl p-8 text-white">
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To ensure every African child grows up proud of their heritage, 
                confident in their identity, and connected to their roots through 
                beautiful, authentic kitenge wear that tells their story.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#CC5500] rounded-full p-2">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Cultural Pride</h4>
                  <p className="text-gray-600">Celebrating African heritage in every stitch</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#CC5500] rounded-full p-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Quality Craftsmanship</h4>
                  <p className="text-gray-600">Every piece made with love and attention to detail</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#CC5500] rounded-full p-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Community Impact</h4>
                  <p className="text-gray-600">Building confidence, one child at a time</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#CC5500] rounded-full p-2">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black">Customer First</h4>
                  <p className="text-gray-600">Ready in 3 days, made to measure with care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            The Bantu Baby Impact
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Since 2020, we've been more than a clothing brand - we're a movement 
            that's changing how children see themselves and their heritage.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#CC5500] rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white">Happy Children</div>
            </div>
            <div className="bg-[#CC5500] rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">300+</div>
              <div className="text-white">Proud Families</div>
            </div>
            <div className="bg-[#CC5500] rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-white">Years Strong</div>
            </div>
            <div className="bg-[#CC5500] rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-white">Cultural Pride</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#CC5500] to-[#FF7A00]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the Bantu Baby Family
          </h2>
          <p className="text-xl text-white mb-8">
            Ready to dress your little one in heritage and pride? 
            Let's create something beautiful together.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a 
              href="/gallery"
              className="inline-block bg-white text-[#CC5500] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Our Gallery
            </a>
            <a 
              href="/order"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#CC5500] transition-colors duration-200"
            >
              Make Your Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}