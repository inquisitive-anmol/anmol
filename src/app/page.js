
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import SocialIcons from "@/components/SocialIcons";
import useLocomotiveScroll from "@/hooks/useLocomotiveScroll";

export default function Home() {
  const scrollRef = useLocomotiveScroll();

  return (
    <>
      <SocialIcons />
      <div ref={scrollRef} data-scroll-container className="w-full">
        <div data-scroll-section>
          <Header />
        </div>
        <div data-scroll-section>
          <Hero />
        </div>
      </div>
    </>
  );
}
