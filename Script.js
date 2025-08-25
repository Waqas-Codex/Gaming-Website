 AOS.init({
    duration: 1000, 
    offset: 120,    
    once: true      
  });



const heroData = [
      {
        image: 'Images/call-of-duty-black-ops-7-ej-1920x1080.jpg',
        title: 'Call of Duty',
        desc: 'Welcome to battle zone!',
        link: 'https://www.callofduty.com/blackops7'
      },
      {
        image: 'Images/gta-vi-wallpaper-made-from-all-the-new-artwork-v0-i4j746bkxeze1.jpg',
        title: 'Grand Theft Auto',
        desc: 'Ultimate Gaming experience.',
        link: 'https://www.rockstargames.com/VI' 
      },
      {
        image: 'Images/mafia-the-old-7680x4320-22472.jpg',
        title: 'Mafia The Country',
        desc: 'Experience This New Mafia Game.',
        link: 'https://mafia.com/preorder'
      },
      {
        image: 'Images/neymar-jr-efootball-3840x2160-22229.jpg',
        title: 'FIFA 25',
        desc: 'Kick off with the latest football game.',
        // link: 'https://fifa.com/preorder'
      }
    ];

    let currentHero = 0;

    function updateHeroImage() {
      const hero = document.getElementById('heroSection');
      const title = document.getElementById('heroTitle');
      const desc = document.getElementById('heroDesc');
      const btn = document.getElementById('main-btn1');

      hero.style.backgroundImage = `url('${heroData[currentHero].image}')`;
      title.textContent = heroData[currentHero].title;
      desc.textContent = heroData[currentHero].desc;
      btn.href = heroData[currentHero].link;
      btn.textContent = 'PRE-ORDER NOW';
    }

    function nextHero() {
      currentHero = (currentHero + 1) % heroData.length;
      updateHeroImage();
    }

    function prevHero() {
      currentHero = (currentHero - 1 + heroData.length) % heroData.length;
      updateHeroImage();
    }

    updateHeroImage();

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const flash = document.getElementById("flash");
    const gunfire = document.getElementById("gunfire");

    // Page load hone ke baad loader hatao
    setTimeout(() => {
      loader.style.display = "none";

      // Flash Effect
      flash.style.opacity = "1";
      setTimeout(() => flash.style.opacity = "0", 150);

      // Gunfire Sound
      gunfire.play();
    }, 3000); // 3s loader chalega (chahe website heavy ho)
  });

  function greet() {
    document.querySelector('.nav ul').classList.toggle('show');
  }