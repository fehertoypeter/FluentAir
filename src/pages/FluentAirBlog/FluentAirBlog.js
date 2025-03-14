import React, { useContext, useEffect } from "react";
import { TopBarContext } from "../../components/topbar/TopBarContext";
import "./FluentAirBlog.css";

function FluentAirBlog() {
  const { setContent } = useContext(TopBarContext);

  useEffect(() => {
    setContent(
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>FluentAir Blog</span>
      </div>
    );
    // Az oldallelépéskor visszaállítjuk az eredeti tartalmat
    return () => setContent(null);
  }, [setContent]);

  return (
    <div className="fluentair-blog">
      <h1 itemprop="headline">
        How Cameron Did It: Self-Funding Your Pilot Training
      </h1>
      <picture>
        <source
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/7CqbQBDsURMRhNp8XjFQWv/44014bd739484eb7654885a63cb74873/Cover_How_Cameron_Did_It.png?q=80&amp;fm=webp
                "
          type="image/webp"
        />
        <img
          alt="Cover How Cameron Did It"
          loading="lazy"
          width="1630"
          height="1000"
          decoding="async"
          data-nimg="1"
          class="w-[670px] mx-auto h-auto rounded-2.5xl overflow-hidden"
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/7CqbQBDsURMRhNp8XjFQWv/44014bd739484eb7654885a63cb74873/Cover_How_Cameron_Did_It.png?q=80 1x,
                  https://images.ctfassets.net/tx9tltt2q9jh/7CqbQBDsURMRhNp8XjFQWv/44014bd739484eb7654885a63cb74873/Cover_How_Cameron_Did_It.png?q=80 2x
                "
          src="https://images.ctfassets.net/tx9tltt2q9jh/7CqbQBDsURMRhNp8XjFQWv/44014bd739484eb7654885a63cb74873/Cover_How_Cameron_Did_It.png?q=80"
        />
      </picture>
      <p>
        Becoming a pilot is a dream for many, but the financial barriers can be
        daunting. The sky-high costs of flight school, the need for large sums
        of money in a short period, and the scarcity of funding options can make
        the path to the cockpit seem impossible. Moreover, the intense demands
        of flight school often leave little time for working on the side,
        further complicating the financial puzzle. However, despite these
        challenges, starting flight training with little to no money is entirely
        possible and successfully self-funding your journey to becoming a
        pilot.&nbsp;
      </p>
      <p>
        Meet Cameron, a dedicated pilot who does his best to self-fund his
        training. As an Airhead Ambassador, his story serves as a real-life
        example of how perseverance and financial planning can turn aviation
        dreams into reality.&nbsp;
      </p>
      <p>
        Despite the demands of his current CPL training, Cameron took the time
        to share his practical strategies for managing finances while working
        toward becoming a commercial pilot. Here’s his first-hand advice on how
        to navigate the financial challenges of pilot training without breaking
        the bank.
      </p>
      <p>
        <a
          href="https://www.airheadatpl.com/blog/navigating-the-costs-a-guide-to-funding-your-pilot-training"
          target="_blank"
          rel="noopener noreferrer"
          class="break-words"
        >
          <u>
            Missed our comprehensive guide on funding your pilot training? You
            can get it here.
          </u>
        </a>
        We extensively explored financial planning strategies and identified
        cost-saving opportunities to make your aviation journey attainable for
        you.
      </p>
      <h2 id="Cameron's-Journey-to-Runway">Cameron's Journey to Runway</h2>
      <picture>
        <source
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/5AbbpTiDVZGwV7mIb1UM9K/c6f14bf4f924b03dfa43610195eff34c/Cameron-s_Journey.png?q=80&amp;fm=webp
                "
          type="image/webp"
        />
        <img
          alt="Cameron-s Journey"
          loading="lazy"
          width="670"
          height="300"
          decoding="async"
          data-nimg="1"
          class="w-[670px] mx-auto h-auto rounded-2.5xl overflow-hidden"
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/5AbbpTiDVZGwV7mIb1UM9K/c6f14bf4f924b03dfa43610195eff34c/Cameron-s_Journey.png?q=80 1x,
                  https://images.ctfassets.net/tx9tltt2q9jh/5AbbpTiDVZGwV7mIb1UM9K/c6f14bf4f924b03dfa43610195eff34c/Cameron-s_Journey.png?q=80 2x
                "
          src="https://images.ctfassets.net/tx9tltt2q9jh/5AbbpTiDVZGwV7mIb1UM9K/c6f14bf4f924b03dfa43610195eff34c/Cameron-s_Journey.png?q=80"
        />
      </picture>
      <p>
        Cameron’s passion for aviation was ignited at a young age, thanks to his
        father, a private pilot who owned a Piper Arrow. The thrill of landing
        on racetrack straights during motorsport events left an indelible mark
        on Cameron, fuelling his fascination with flight. Growing up near the
        historic
        <a
          href="https://www.brooklandsmuseum.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="break-words"
        >
          <u>Brooklands Museum</u>
        </a>
        , surrounded by the legacy of British aviation, only deepened his love
        for the skies.
      </p>
      <p>
        But Cameron’s talents weren’t confined to the cockpit. His love for
        mechanics and engineering, cultivated through his involvement in
        motorsports, became the financial springboard that launched his pilot
        training journey. At 21, with a solid foundation in engineering and a
        burning desire to fly, Cameron began his path toward earning his Private
        Pilot Licence (PPL). After achieving that milestone, he eagerly set his
        sights on the more demanding Commercial Pilot Licence (CPL) training.
      </p>
      <p>
        As with many aspiring pilots, one of Cameron's biggest challenges was
        the financial burden of flight training. The sky-high course fees, the
        need for large sums of money in short periods, and the lack of available
        funding from traditional sources made his journey particularly daunting.
        The intense demands of flight school left little room for working on the
        side, compounding the difficulty.
      </p>
      <p>
        Yet, Cameron’s determination and proactive mindset enabled him to
        overcome these obstacles. Despite starting flight school with little to
        no money, he actually self-funded his training through careful planning,
        hard work, and resourcefulness.
      </p>
      <p>
        Here are Cameron’s top tips and tricks for funding your pilot training.
      </p>
      <h2 id="1.-Go-Modular!">1. Go Modular!&nbsp;</h2>
      <picture>
        <source
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/1yJhl4tFL2IEOdv9f4hOEA/166465a6ff2b7335544125a3e4055e3f/Go_Modular.png?q=80&amp;fm=webp
                "
          type="image/webp"
        />
        <img
          alt="Go Modular"
          loading="lazy"
          width="670"
          height="300"
          decoding="async"
          data-nimg="1"
          class="w-[670px] mx-auto h-auto rounded-2.5xl overflow-hidden"
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/1yJhl4tFL2IEOdv9f4hOEA/166465a6ff2b7335544125a3e4055e3f/Go_Modular.png?q=80 1x,
                  https://images.ctfassets.net/tx9tltt2q9jh/1yJhl4tFL2IEOdv9f4hOEA/166465a6ff2b7335544125a3e4055e3f/Go_Modular.png?q=80 2x
                "
          src="https://images.ctfassets.net/tx9tltt2q9jh/1yJhl4tFL2IEOdv9f4hOEA/166465a6ff2b7335544125a3e4055e3f/Go_Modular.png?q=80"
        />
      </picture>
      <p>
        If you're looking to get qualified as quickly as possible (which you
        should in the current hot market in the UK/Europe) without having all
        the funds available upfront, modular training is your best option. Break
        your training into manageable chunks, and within each module, train at a
        pace that suits your schedule and budget. There's no requirement to have
        all the money upfront or even the funds for a specific module before you
        start! This method, commonly referred to as Pay-as-you-Fly, allows you
        to book sessions when they fit your time and budget.
      </p>
      <p>
        <a
          href="https://www.airheadatpl.com/blog/from-zero-to-hero-the-path-from-ppl-to-atpl"
          target="_blank"
          rel="noopener noreferrer"
          class="break-words"
        >
          <u>
            To learn more about the modular route, a popular path for aspiring
            pilots, click here.
          </u>
        </a>
      </p>
      <h2 id="2.-Apply-to-Sponsored-Schemes">2. Apply to Sponsored Schemes</h2>
      <picture>
        <source
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/9ZIoMf48e6hKoGK7R6U2m/19bd4279d187fedfba6e6427aa752df9/Apply_to_Sponsored_Schemes.png?q=80&amp;fm=webp
                "
          type="image/webp"
        />
        <img
          alt="Apply to Sponsored Schemes"
          loading="lazy"
          width="670"
          height="300"
          decoding="async"
          data-nimg="1"
          class="w-[670px] mx-auto h-auto rounded-2.5xl overflow-hidden"
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/9ZIoMf48e6hKoGK7R6U2m/19bd4279d187fedfba6e6427aa752df9/Apply_to_Sponsored_Schemes.png?q=80 1x,
                  https://images.ctfassets.net/tx9tltt2q9jh/9ZIoMf48e6hKoGK7R6U2m/19bd4279d187fedfba6e6427aa752df9/Apply_to_Sponsored_Schemes.png?q=80 2x
                "
          src="https://images.ctfassets.net/tx9tltt2q9jh/9ZIoMf48e6hKoGK7R6U2m/19bd4279d187fedfba6e6427aa752df9/Apply_to_Sponsored_Schemes.png?q=80"
        />
      </picture>
      <p>
        Certain airlines and organisations offer funded cadet schemes to help
        increase the number of pilots in training to meet the expected demand in
        the coming years. Such programmes are highly competitive but provide an
        opportunity to receive pilot training at a reduced cost.
      </p>
      <p>&nbsp;Here are some of the most prominent ones:</p>
      <p>
        <a
          href="https://careers.ba.com/future-pilots"
          target="_blank"
          rel="noopener noreferrer"
          class="break-words"
        >
          <u>British Airways Cadet Programme (UK)</u>
        </a>
      </p>
      <p>
        <a
          href="https://www.lufthansa-aviation-training.com/de/pilotenausbildung"
          target="_blank"
          rel="noopener noreferrer"
          class="break-words"
        >
          <u>European Flight Academy (Lufthansa’s Cadet Program)</u>
        </a>
      </p>
      <p>
        <a
          href="https://careers.easyjet.com/en/career-areas/pilots/become-a-pilot"
          target="_blank"
          rel="noopener noreferrer"
          class="break-words"
        >
          <u>easyJet Pilot Training Program (UK</u>
        </a>
        )
      </p>
      <p>
        <a
          href="https://afta.ie/mentorship-ryanair/"
          target="_blank"
          rel="noopener noreferrer"
          class="break-words"
        >
          <u>Ryanair Mentored Cadet Programme (Ireland/Europe)</u>
        </a>
      </p>
      <p>
        <a
          href="https://careers.tuigroup.com/uk/pilot-cadet-programme/"
          target="_blank"
          rel="noopener noreferrer"
          class="break-words"
        >
          <u>TUI Airline Multi-Crew Pilot Licence Cadet Programme</u>
        </a>
      </p>
      <h2 id="3.-Do-Research-on-Flight-Schools">
        3. Do Research on Flight Schools
      </h2>
      <p>
        Not all flight schools are created equal. Training prices for modular
        courses can range from around £50,000 to £110,000. Depending on factors
        such as the cost of the airport where the school is located, whether the
        aircraft are owned or leased by the school, the fleet being used, and
        the school's amenities. Don’t be swayed by a school's name, shiny new
        planes, or modern buildings. The type of aircraft you train on is less
        important than you might think but can make a big difference to your
        bank account.
      </p>
      <picture>
        <source
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/7LV55AI7DuM5FXp7hlu2JZ/dc4aa084b31cd11ee458b90f562a05d5/Do_Research.png?q=80&amp;fm=webp
                "
          type="image/webp"
        />
        <img
          alt="Do Research"
          loading="lazy"
          width="670"
          height="300"
          decoding="async"
          data-nimg="1"
          class="w-[670px] mx-auto h-auto rounded-2.5xl overflow-hidden"
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/7LV55AI7DuM5FXp7hlu2JZ/dc4aa084b31cd11ee458b90f562a05d5/Do_Research.png?q=80 1x,
                  https://images.ctfassets.net/tx9tltt2q9jh/7LV55AI7DuM5FXp7hlu2JZ/dc4aa084b31cd11ee458b90f562a05d5/Do_Research.png?q=80 2x
                "
          src="https://images.ctfassets.net/tx9tltt2q9jh/7LV55AI7DuM5FXp7hlu2JZ/dc4aa084b31cd11ee458b90f562a05d5/Do_Research.png?q=80"
        />
      </picture>
      <p>
        <b>Add-on from Airhead</b>
      </p>
      <p>
        When selecting a flight school, consider all associated costs, including
        tuition, equipment, and living expenses. Some schools offer payment
        plans or discounts for upfront payments, which can help you manage your
        finances more effectively. Thorough research and comparison of schools
        are essential to find one that fits your budget while maintaining the
        quality of education and training. Likewise, the cost of pilot training
        may differ significantly across Europe and in Asia. Moving to a location
        with lower flight training costs may be an option for you.
      </p>
      <p>
        Check out our article
        <a
          href="https://www.airheadatpl.com/blog/a-comprehensive-guide-to-choosing-an-atpl-ground-school-5-aspects"
          target="_blank"
          rel="noopener noreferrer"
          class="break-words"
        >
          <u>How to Choose an ATPL Ground School: 5 Key Aspects to Consider</u>
        </a>
        for essential tips to guide your decision.
      </p>
      <h2 id="4.-Over-Budget-Then-Add-More">4. Over Budget, Then Add More</h2>
      <picture>
        <source
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/5wK2GPN8sjD1wigSPazPnl/0583ee0bd0d622c2e9fbef7db3e0f430/Over_Budget.png?q=80&amp;fm=webp
                "
          type="image/webp"
        />
        <img
          alt="Over Budget"
          loading="lazy"
          width="670"
          height="300"
          decoding="async"
          data-nimg="1"
          class="w-[670px] mx-auto h-auto rounded-2.5xl overflow-hidden"
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/5wK2GPN8sjD1wigSPazPnl/0583ee0bd0d622c2e9fbef7db3e0f430/Over_Budget.png?q=80 1x,
                  https://images.ctfassets.net/tx9tltt2q9jh/5wK2GPN8sjD1wigSPazPnl/0583ee0bd0d622c2e9fbef7db3e0f430/Over_Budget.png?q=80 2x
                "
          src="https://images.ctfassets.net/tx9tltt2q9jh/5wK2GPN8sjD1wigSPazPnl/0583ee0bd0d622c2e9fbef7db3e0f430/Over_Budget.png?q=80"
        />
      </picture>
      <p>
        Flight school is unforgiving and almost always ends up costing more than
        you initially expected. Extra hours, fuel surcharges, licensing fees,
        airfield fees, personal costs — the list goes on. My rule of thumb is to
        add a minimum of 25% to the training cost figure presented to you on
        paper. This will give you a margin for the extra hours needed and cover
        all the little fees that sneak into flight training.
      </p>
      <p>
        How you acquire the funds for flight school is a personal choice,
        depending on what job you can find. Ideally, you should aim for a job
        that offers both income potential and time flexibility. Personally, I
        worked multiple part-time jobs to fund 100% of my training during all
        modules, which took three years.
      </p>
      <h2 id="Airhead's-Takeaway">Airhead's Takeaway</h2>
      <picture>
        <source
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/4u8fak6wfdeMplcSZCZHM0/e1ef14a420e0386403069126f84297a0/Takeaway-2.png?q=80&amp;fm=webp
                "
          type="image/webp"
        />
        <img
          alt="Takeaway-2"
          loading="lazy"
          width="670"
          height="300"
          decoding="async"
          data-nimg="1"
          class="w-[670px] mx-auto h-auto rounded-2.5xl overflow-hidden"
          srcset="
                  https://images.ctfassets.net/tx9tltt2q9jh/4u8fak6wfdeMplcSZCZHM0/e1ef14a420e0386403069126f84297a0/Takeaway-2.png?q=80 1x,
                  https://images.ctfassets.net/tx9tltt2q9jh/4u8fak6wfdeMplcSZCZHM0/e1ef14a420e0386403069126f84297a0/Takeaway-2.png?q=80 2x
                "
          src="https://images.ctfassets.net/tx9tltt2q9jh/4u8fak6wfdeMplcSZCZHM0/e1ef14a420e0386403069126f84297a0/Takeaway-2.png?q=80"
        />
      </picture>
      <p>
        Cameron's journey to becoming a pilot is a powerful reminder that a
        rewarding aviation career is possible, even on a tight budget. His story
        shows that with determination, careful financial planning, and a
        proactive approach, you can navigate the challenges and make your dream
        a reality. Keep pushing forward, do your research, seek advice from
        those who have walked the path before you, and never give up. The skies
        are within your reach — stay focused, stay resilient, and let your
        passion for flight guide you to success.
      </p>
      <button id="scrollToTopBtn">Ugrás a tetejére</button>
    </div>
  );
}

export default FluentAirBlog;
