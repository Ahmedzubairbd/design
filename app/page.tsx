import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/home/hero-section"
import { DoctorsSlider } from "@/components/home/doctors-slider"
import { ServicesSection } from "@/components/home/services-section"
import { TestPackagesSection } from "@/components/home/test-packages-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { NewsSection } from "@/components/home/news-section"
import { CTASection } from "@/components/home/cta-section"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <DoctorsSlider />
      <ServicesSection />
      <TestPackagesSection />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </MainLayout>
  )
}
