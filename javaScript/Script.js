src="https://unpkg.com/aos@2.3.4/dist/aos.js"

  AOS.init({
    duration: 1000, 
    offset: 120,    
    once: true      
  });



const heroData = [
    {
      image: 'Images/call-of-duty-black-ops-7-ej-1920x1080.jpg',
      title: 'Call of Duty',
      desc: 'Welcome to battle zone!'
    },
    {
      image: 'Images/gta-vi-wallpaper-made-from-all-the-new-artwork-v0-i4j746bkxeze1.jpg',
      title: 'Grand Theft Auto',
      desc: 'Ultimate Gaming experience.'
    },
    {
      image: 'Images/mafia-the-old-7680x4320-22472.jpg',
      title: 'Mafia The Country',
      desc: 'Experience This New Mafia Game.'
    },
    {
      image: 'Images/neymar-jr-efootball-3840x2160-22229.jpg',
      title: 'FIFA 25',
      desc: 'Kick off with the latest football game.',
    }
  ];

  let currentHero = 0;

  function updateHeroImage() {
    const hero = document.getElementById('heroSection');
    const title = document.getElementById('heroTitle');
    const desc = document.getElementById('heroDesc');
    const  btn= document.getElementById('main-btn1');

    hero.style.backgroundImage = `url('${heroData[currentHero].image}')`;
    title.textContent = heroData[currentHero].title;
    desc.textContent = heroData[currentHero].desc;
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

