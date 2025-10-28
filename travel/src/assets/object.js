const travelDestinations = [
  {
    name: "Azad Kashmir",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssTHL0PnaaRl90CeEQRRZRnBU7ah2BnchlA&s",
    description: "Azad Kashmir, often called 'Paradise on Earth', is home to lush valleys, sparkling rivers, and snow-covered peaks. From the breathtaking Neelum Valley to the serene beauty of Banjosa Lake, it’s a perfect destination for nature lovers. Adventure seekers can enjoy hiking, river rafting, and camping amidst the stunning landscape. The area’s cool climate and natural charm make it a top travel spot for families and couples alike.",
    travelRates: "PKR 18,000 per person",
    durationDays: "5 Days / 4 Nights",
    airline: "PIA",
    totalAmount: "PKR 36,000 (for 2 persons)"
  },
  {
    name: "Lahore",
    image: "https://akm-img-a-in.tosshub.com/sites/rd/resources/201908/lahore_1566551840_1200x675.png?size=684:384",
    description: "Lahore, the heart of Pakistan, is a city rich in history, art, and food. Explore the majestic Badshahi Mosque, Lahore Fort, and Shalimar Gardens — masterpieces of Mughal architecture. Don’t miss the energetic Lahore Food Street for desi delights and the vibrant Anarkali Bazaar for traditional shopping. The city’s culture, hospitality, and charm make it an unforgettable destination.",
    travelRates: "PKR 10,000 per person",
    durationDays: "3 Days / 2 Nights",
    airline: "AirSial",
    totalAmount: "PKR 20,000 (for 2 persons)"
  },
  {
    name: "Murree",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-_d73eTbzkjMgAmhAICZLSU69jIInJP7bQ&s",
    description: "Murree, also known as the 'Queen of Hills', is a scenic hill station surrounded by pine forests and misty mountains. Visitors can stroll along Mall Road, enjoy cable car rides at Patriata, or relax in cozy cottages with panoramic valley views. The cool climate, snow in winter, and peaceful ambiance make Murree a perfect escape from city life.",
    travelRates: "PKR 12,000 per person",
    durationDays: "3 Days / 2 Nights",
    airline: "AirBlue",
    totalAmount: "PKR 24,000 (for 2 persons)"
  },
  {
    name: "Swat Valley",
    image: "https://visitinpakistan.com/wp-content/uploads/2020/02/1-Alpurai-Swat-KPK-1-640x499-1.jpg",
    description: "Swat Valley, known as the 'Switzerland of Pakistan', captivates travelers with its lush green fields, rivers, and snowy peaks. Visit Malam Jabba for skiing, Mingora for local culture, and Kalam for crystal-clear waterfalls. Swat’s stunning scenery and cultural richness make it a top choice for honeymooners and adventure travelers alike.",
    travelRates: "PKR 20,000 per person",
    durationDays: "5 Days / 4 Nights",
    airline: "SereneAir",
    totalAmount: "PKR 40,000 (for 2 persons)"
  },
  {
    name: "Gilgit",
    image: "https://i.brecorder.com/primary/2024/07/20172202193b7b7.jpg",
    description: "Gilgit, nestled among the mighty Karakoram mountains, is a hub for trekking and adventure. Travelers can explore glaciers, suspension bridges, and vibrant local markets. It serves as a gateway to Hunza, Naltar, and Fairy Meadows. Gilgit’s peaceful atmosphere and awe-inspiring landscapes offer an unmatched experience for mountain lovers.",
    travelRates: "PKR 22,000 per person",
    durationDays: "6 Days / 5 Nights",
    airline: "PIA",
    totalAmount: "PKR 44,000 (for 2 persons)"
  },
  {
    name: "Hunza Valley",
    image: "https://www.jasminetours.com/wp-content/uploads/2024/01/hunza-valley-1-min.jpg",
    description: "Hunza Valley is a breathtaking destination surrounded by towering peaks like Rakaposhi and Ultar Sar. The valley’s turquoise lakes, apricot orchards, and the historic Baltit and Altit forts create a dreamlike atmosphere. Meet friendly locals, taste Hunza bread, and witness mesmerizing sunsets at Eagle’s Nest viewpoint.",
    travelRates: "PKR 25,000 per person",
    durationDays: "6 Days / 5 Nights",
    airline: "AirBlue",
    totalAmount: "PKR 50,000 (for 2 persons)"
  },
  {
    name: "Naran Kaghan",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/de/45/a9/naran-is-a-small-town.jpg?w=600&h=600&s=1",
    description: "Naran Kaghan Valley is one of Pakistan’s most visited tourist areas, famous for its lush meadows, alpine lakes, and snow-capped mountains. Saif-ul-Malook Lake, Babusar Top, and Lulusar Lake are must-visit sites. The cool weather and scenic landscapes make it perfect for photography, camping, and jeep safaris.",
    travelRates: "PKR 18,000 per person",
    durationDays: "5 Days / 4 Nights",
    airline: "SereneAir",
    totalAmount: "PKR 36,000 (for 2 persons)"
  },
  {
    name: "Skardu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4zt0uEWltBx2cA20VEOiEIXw36_UYQPf7w&s",
    description: "Skardu, located in Gilgit-Baltistan, is the ultimate destination for adventure and serenity. Surrounded by the world’s highest peaks, it offers beautiful lakes like Shangrila, Satpara, and Upper Kachura. Travelers can visit the ancient Skardu Fort and enjoy a peaceful stay near crystal-clear waters. It’s truly a heaven for trekkers and explorers.",
    travelRates: "PKR 24,000 per person",
    durationDays: "6 Days / 5 Nights",
    airline: "PIA",
    totalAmount: "PKR 48,000 (for 2 persons)"
  },
  {
    name: "Fairy Meadows",
    image: "https://images.squarespace-cdn.com/content/v1/5a815ad2e45a7c1f4ef40fb8/1533222115427-RM0925EGPCZMCCN8T01S/fairy-meadows-1920.jpg",
    description: "Fairy Meadows is a breathtaking alpine meadow offering one of the world’s best views of Nanga Parbat, the 9th highest mountain on Earth. It’s a dream destination for trekkers, photographers, and nature enthusiasts. The camping experience under starry skies surrounded by snow peaks is simply unforgettable.",
    travelRates: "PKR 20,000 per person",
    durationDays: "5 Days / 4 Nights",
    airline: "AirSial",
    totalAmount: "PKR 40,000 (for 2 persons)"
  },
  {
    name: "Neelum Valley",
    image: "https://www.imusafir.pk/blog/wp-content/uploads/2025/01/neelum-valley.jpg",
    description: "Neelum Valley in Azad Kashmir is a hidden paradise filled with waterfalls, pine forests, and turquoise rivers. Famous spots like Keran, Sharda, and Arang Kel attract tourists for their heavenly beauty. It’s a perfect spot for camping, boating, and enjoying the natural serenity of Kashmir.",
    travelRates: "PKR 17,000 per person",
    durationDays: "5 Days / 4 Nights",
    airline: "AirBlue",
    totalAmount: "PKR 34,000 (for 2 persons)"
  },
  {
    name: "Balochistan (Kund Malir)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqFshtO3ms1CPUb17Yp-8RvMuqCIyACT9sQ&s",
    description: "The Balochistan coastal belt, featuring Ormara and Kund Malir beaches, is perfect for those seeking peace and natural beauty. Golden sand beaches meet the turquoise Arabian Sea, creating breathtaking scenery. The Makran Coastal Highway offers one of the most scenic drives in Pakistan.",
    travelRates: "PKR 15,000 per person",
    durationDays: "4 Days / 3 Nights",
    airline: "SereneAir",
    totalAmount: "PKR 30,000 (for 2 persons)"
  },
  {
    name: "Ratti Gali Lake",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-U_0GTz2YuhtG98U7NZz_GoaGLy3uZam5Q&s",
    description: "Ratti Gali Lake is one of the most stunning alpine lakes in Neelum Valley, surrounded by snow-covered mountains and wildflowers. The trek to the lake is an adventure in itself, offering panoramic views and peaceful surroundings. It’s an ideal destination for nature photographers and campers.",
    travelRates: "PKR 18,000 per person",
    durationDays: "5 Days / 4 Nights",
    airline: "PIA",
    totalAmount: "PKR 36,000 (for 2 persons)"
  },
  {
    name: "Fairy Lake (Saif-ul-Malook)",
    image: "https://visitsilkroad.org/wp-content/uploads/2021/04/Saif-Ul-Malook-Lake-featured_image2.jpg",
    description: "Lake Saif-ul-Malook, near Naran, is a legendary high-altitude lake known for its magical beauty and myths. Surrounded by snow-capped peaks and reflection of Malika Parbat, it’s a must-see spot. Tourists can enjoy boating and horse riding while soaking in the breathtaking mountain views.",
    travelRates: "PKR 16,000 per person",
    durationDays: "4 Days / 3 Nights",
    airline: "AirSial",
    totalAmount: "PKR 32,000 (for 2 persons)"
  },
  {
    name: "Khaplu Valley",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9XRGzWybSscGnUNlOi6Jn0sPBDcy_h4i7Q&s",
    description: "Khaplu Valley, located near Skardu, offers a peaceful escape surrounded by mighty mountains and ancient history. Visit the iconic Khaplu Fort, stroll along the Shyok River, and meet hospitable Balti locals. Its untouched charm and serene environment make it perfect for cultural and nature tourism.",
    travelRates: "PKR 22,000 per person",
    durationDays: "6 Days / 5 Nights",
    airline: "PIA",
    totalAmount: "PKR 44,000 (for 2 persons)"
  },
  {
    name: "Malam Jabba",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSff-CQ5zifQlQ6rHATerCIQEUEdsUvRUJMmg&s",
    description: "Malam Jabba, Pakistan’s only ski resort, offers a mix of adventure and scenic beauty. Travelers can enjoy skiing, chair lifts, and zipline activities. Surrounded by pine forests and snow in winter, it’s ideal for both thrill-seekers and families looking for a cozy mountain retreat.",
    travelRates: "PKR 19,000 per person",
    durationDays: "4 Days / 3 Nights",
    airline: "SereneAir",
    totalAmount: "PKR 38,000 (for 2 persons)"
  }
];

export default travelDestinations;
