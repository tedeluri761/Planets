let smallLine = document.getElementById("smallLine");
let Paragraph = document.getElementById("Paragraph");
let HRConteienr = document.getElementById("HRConteienr");
let ChoosePlanet = document.getElementById("ChoosePlanet");
let ChoosePlanet2 = document.querySelectorAll(".ChoosePlanet");
let planet1 = document.getElementById("planet1");
let planet2 = document.getElementById("planet2");
let planet3 = document.getElementById("planet3");
let planet4 = document.getElementById("planet4");
let planet5 = document.getElementById("planet5");
let planet6 = document.getElementById("planet6");
let planet7 = document.getElementById("planet7");
let planet8 = document.getElementById("planet8");
let Name = document.getElementById("Name");
let Mercury = document.getElementById("Mercury");
let rotation = document.querySelectorAll("footer");
let link = document.getElementById("link");
let structurePlanet1 = document.getElementById("structurePlanet1");
let structurePlanet2 = document.getElementById("structurePlanet2");
let structurePlanet3 = document.getElementById("structurePlanet3");
let structurePlanet4 = document.getElementById("structurePlanet4");
let structurePlanet5 = document.getElementById("structurePlanet5");
let structurePlanet6 = document.getElementById("structurePlanet6");
let structurePlanet7 = document.getElementById("structurePlanet7");
let structurePlanet8 = document.getElementById("structurePlanet8");
let surfaceplanet1 = document.getElementById("surfaceplanet1");
let surfaceplanet2 = document.getElementById("surfaceplanet2");
let surfaceplanet3 = document.getElementById("surfaceplanet3");
let surfaceplanet4 = document.getElementById("surfaceplanet4");
let surfaceplanet5 = document.getElementById("surfaceplanet5");
let surfaceplanet6 = document.getElementById("surfaceplanet6");
let surfaceplanet7 = document.getElementById("surfaceplanet7");
let surfaceplanet8 = document.getElementById("surfaceplanet8");

function structure() {
  smallLine.style.margin = "1.8rem 14rem 0 16rem";
  smallLine.classList.add("active1");
  smallLine.classList.remove("active3");
  smallLine.classList.remove("active2");
  surfaceplanet1.style.display = "none";
  surfaceplanet2.style.display = "none";
  surfaceplanet3.style.display = "none";
  surfaceplanet4.style.display = "none";
  surfaceplanet5.style.display = "none";
  surfaceplanet6.style.display = "none";
  surfaceplanet7.style.display = "none";
  surfaceplanet8.style.display = "none";
  planet1.style.display = "none";
  planet2.style.display = "none";
  planet3.style.display = "none";
  planet4.style.display = "none";
  planet5.style.display = "none";
  planet6.style.display = "none";
  planet7.style.display = "none";
  planet8.style.display = "none";
  structurePlanet1.style.display = "none";
  structurePlanet2.style.display = "none";
  structurePlanet3.style.display = "none";
  structurePlanet4.style.display = "none";
  structurePlanet5.style.display = "none";
  structurePlanet6.style.display = "none";
  structurePlanet7.style.display = "none";
  structurePlanet8.style.display = "none";
  Mercury.style.marginTop = "";
  if (Name.textContent === "MERCURY") {
    Paragraph.textContent = `Core: Mercury has a very large iron core, taking up about 85% of its diameter, which makes it extremely dense.
    Mantle: Surrounding the core is a thin rocky layer called the mantle, made mostly of silicate rocks.
    Crust: Mercury’s crust is thin and covered in craters from asteroid impacts. It’s also marked by plains from ancient volcanic activity.`;
    structurePlanet1.style.display = "block";
    planet1.style.display = "none";
  } else if (Name.textContent === "VENUS") {
    Paragraph.textContent = `Core: Iron-nickel core, possibly similar to Earth's.
Mantle: Silicate rock layer driving volcanic activity.
Crust: Thin, rocky crust covered in volcanic plains and ridges.`;
    structurePlanet2.style.display = "block";
    planet2.style.display = "none";
  } else if (Name.textContent === "EARTH") {
    Paragraph.textContent = `Core: Earth has an inner solid iron core and an outer liquid iron core, generating its magnetic field.
Mantle: The thickest layer, made of semi-solid rock that slowly moves, driving plate tectonics.
Crust: A thin, outer layer of solid rock, forming continents and ocean floors.`;
    structurePlanet3.style.display = "block";
    planet3.style.display = "none";
  } else if (Name.textContent === "MARS") {
    Paragraph.textContent = `Core: Mars likely has a solid iron-sulfur core, though smaller and cooler than Earth's.
Mantle: A rocky layer rich in silicates, responsible for past volcanic activity but now largely inactive.
Crust: A thick, stable crust with a mix of volcanic plains, impact basins, and highlands.`;
    structurePlanet4.style.display = "block";
    planet4.style.display = "none";
  } else if (Name.textContent === "JUPITER") {
    Paragraph.textContent = `Core: Jupiter likely has a dense, rocky or metallic core, though its exact composition remains uncertain.
Mantle/Metallic Hydrogen Layer: Surrounding the core, there's a thick layer of metallic hydrogen, created under extreme pressure, which conducts electricity and generates Jupiter’s strong magnetic field.
Outer Layers: The outer layer is primarily composed of liquid and gaseous hydrogen and helium, with a gradual transition from liquid to gas as it moves outward.`;
    structurePlanet5.style.display = "block";
    planet5.style.display = "none";
  } else if (Name.textContent === "SATURN") {
    Paragraph.textContent = `Core: Saturn likely has a dense core made of rock and metal, surrounded by a layer of ice, under immense pressure and heat.
Metallic Hydrogen Layer: Around the core is a thick layer of metallic hydrogen, which creates a magnetic field similar to Jupiter's.
Outer Layers: The outer layer is composed of liquid and gaseous hydrogen and helium, transitioning gradually from liquid to gas with increasing altitude.`;
    structurePlanet6.style.display = "block";
    planet6.style.display = "none";
  } else if (Name.textContent === "URANUS") {
    Paragraph.textContent = `Core: Uranus likely has a small, rocky core, surrounded by layers of icy materials such as water, ammonia, and methane under high pressure.
Mantle/Icy Layer: Above the core, there is a thick, icy mantle composed mostly of water, ammonia, and methane ices, giving it the classification of an "ice giant."
Outer Layers: The outermost layer consists of hydrogen and helium gases with trace amounts of methane, which gives Uranus its blue-green color.`;
    structurePlanet7.style.display = "block";
    planet7.style.display = "none";
  } else if (Name.textContent === "NEPTUNE") {
    Paragraph.textContent = `Core: Neptune has a small, dense core of rock and metal, similar to Uranus's core.
Mantle/Icy Layer: Surrounding the core is a thick mantle of water, ammonia, and methane ices, which gives Neptune its "ice giant" classification.
Outer Layers: The outermost layer is made up of hydrogen, helium, and a higher concentration of methane, contributing to Neptune’s deep blue color.`;
    structurePlanet8.style.display = "block";
    planet8.style.display = "none";
  }
}

function Surface() {
  smallLine.style.margin = "1.8rem 1.5rem 0 29rem";
  smallLine.classList.add("active2");
  smallLine.classList.remove("active1");
  smallLine.classList.remove("active3");
  surfaceplanet1.style.display = "none";
  surfaceplanet2.style.display = "none";
  surfaceplanet3.style.display = "none";
  surfaceplanet4.style.display = "none";
  surfaceplanet5.style.display = "none";
  surfaceplanet6.style.display = "none";
  surfaceplanet7.style.display = "none";
  surfaceplanet8.style.display = "none";
  planet1.style.display = "none";
  planet2.style.display = "none";
  planet3.style.display = "none";
  planet4.style.display = "none";
  planet5.style.display = "none";
  planet6.style.display = "none";
  planet7.style.display = "none";
  planet8.style.display = "none";
  structurePlanet1.style.display = "none";
  structurePlanet2.style.display = "none";
  structurePlanet3.style.display = "none";
  structurePlanet4.style.display = "none";
  structurePlanet5.style.display = "none";
  structurePlanet6.style.display = "none";
  structurePlanet7.style.display = "none";
  structurePlanet8.style.display = "none";
  if (Name.textContent === "MERCURY") {
    Paragraph.textContent = `Mercury’s surface is rocky and heavily cratered, similar to the Moon. It has a mix of impact craters and basins created by asteroid collisions over billions of years. There are also smooth plains from ancient volcanic activity. Without a significant atmosphere to protect it or regulate temperatures, Mercury’s surface experiences extreme changes, reaching scorching highs of about 430°C (800°F) during the day and plunging to frigid lows around -180°C (-290°F) at night.`;

    surfaceplanet1.style.display = "block";
    surfaceplanet1.style.position = "relative";
    surfaceplanet1.style.width = "65px";
    surfaceplanet1.style.height = "65px";
    surfaceplanet1.style.top = "100px";
    surfaceplanet1.style.left = "23px";

    planet1.style.display = "block";
    planet1.style.position = "absolute";
    Mercury.style.marginTop = "15rem";
  } else if (Name.textContent === "VENUS") {
    Paragraph.textContent = `Venus’s surface is extremely hot (around 465°C/869°F), with rocky plains, volcanoes, and thick clouds trapping heat.`;
    surfaceplanet2.style.display = "block";
    surfaceplanet2.style.position = "relative";
    surfaceplanet2.style.width = "90px";
    surfaceplanet2.style.height = "90px";
    surfaceplanet2.style.top = "110px";
    surfaceplanet2.style.left = "32px";

    planet2.style.display = "block";
    planet2.style.position = "absolute";
    Mercury.style.marginTop = "15rem";
  } else if (Name.textContent === "EARTH") {
    Paragraph.textContent = `Surface: Earth's surface includes diverse landscapes, with mountains, plains, oceans, and rivers. It's shaped by tectonic activity, erosion, and weathering, and supports life with a balanced atmosphere.`;
    surfaceplanet3.style.display = "block";
    surfaceplanet3.style.position = "relative";
    surfaceplanet3.style.width = "90px";
    surfaceplanet3.style.height = "90px";
    surfaceplanet3.style.top = "121px";
    surfaceplanet3.style.left = "41px";

    planet3.style.display = "block";
    planet3.style.position = "absolute";
    Mercury.style.marginTop = "15rem";
  } else if (Name.textContent === "MARS") {
    surfaceplanet4.style.display = "block";
    surfaceplanet4.style.position = "relative";
    surfaceplanet4.style.width = "80px";
    surfaceplanet4.style.height = "80px";
    surfaceplanet4.style.top = "104px";
    surfaceplanet4.style.left = "25px";

    planet4.style.display = "block";
    planet4.style.position = "absolute";
    Mercury.style.marginTop = "15rem";

    Paragraph.textContent = `Surface: Mars's surface is dusty, rocky, and covered in iron oxide, giving it a red color. It has massive volcanoes like Olympus Mons, deep canyons like Valles Marineris, and polar ice caps. The thin atmosphere and lack of liquid water make it dry and cold.`;
  } else if (Name.textContent === "JUPITER") {
    surfaceplanet5.style.display = "block";
    surfaceplanet5.style.position = "relative";
    surfaceplanet5.style.width = "70px";
    surfaceplanet5.style.height = "70px";
    surfaceplanet5.style.top = "148px";
    surfaceplanet5.style.left = "78px";

    planet5.style.display = "block";
    planet5.style.position = "absolute";
    Mercury.style.marginTop = "23rem";
    Paragraph.textContent = `Atmosphere: Jupiter’s "surface" is its outer atmosphere, featuring thick clouds of ammonia crystals and complex weather patterns. Its atmosphere is marked by powerful storms, including the Great Red Spot, a massive, centuries-old storm. Jupiter has vibrant bands and zones caused by strong winds circulating in opposite directions.`;
  } else if (Name.textContent === "SATURN") {
    surfaceplanet6.style.display = "block";
    surfaceplanet6.style.position = "relative";
    surfaceplanet6.style.width = "70px";
    surfaceplanet6.style.height = "70px";
    surfaceplanet6.style.top = "152px";
    surfaceplanet6.style.left = "93px";

    planet6.style.display = "block";
    planet6.style.position = "absolute";
    Mercury.style.marginTop = "27rem";

    Paragraph.textContent = `Atmosphere: Saturn's "surface" is its upper atmosphere, featuring pale yellow and beige clouds composed mainly of ammonia and methane. It has high-speed winds and storms, including a unique hexagonal storm pattern at its north pole. Saturn’s iconic rings are made of ice and rock particles, extending outwards and adding to its visual appeal.`;
  } else if (Name.textContent === "URANUS") {
    surfaceplanet7.style.display = "block";
    surfaceplanet7.style.position = "relative";
    surfaceplanet7.style.width = "70px";
    surfaceplanet7.style.height = "70px";
    surfaceplanet7.style.top = "129px";
    surfaceplanet7.style.left = "54px";

    planet7.style.display = "block";
    planet7.style.position = "absolute";
    Mercury.style.marginTop = "22rem";

    Paragraph.textContent = `Atmosphere: Uranus lacks a true solid surface. Its "surface" is the visible atmosphere, primarily composed of hydrogen, helium, and methane gas. The methane absorbs red light, resulting in its characteristic blue-green hue. Uranus has extreme seasonal changes due to its unique sideways tilt, causing unusual weather patterns and long periods of darkness or light at the poles.`;
  } else if (Name.textContent === "NEPTUNE") {
    surfaceplanet8.style.display = "block";
    surfaceplanet8.style.position = "relative";
    surfaceplanet8.style.width = "70px";
    surfaceplanet8.style.height = "70px";
    surfaceplanet8.style.top = "129px";
    surfaceplanet8.style.left = "52px";

    planet8.style.display = "block";
    planet8.style.position = "absolute";
    Mercury.style.marginTop = "22rem";

    Paragraph.textContent = `Atmosphere: Neptune doesn’t have a solid surface, so its "surface" refers to its thick atmosphere. It has powerful storms and intense winds, the fastest in the solar system, reaching over 2,000 km/h (1,200 mph). The methane in Neptune’s atmosphere absorbs red light, creating its vibrant blue color. Neptune also has dynamic cloud formations and massive storm systems, including features like the Great Dark Spot, a giant storm similar to Jupiter's Great Red Spot.`;
  }
}

function overview() {
  smallLine.style.margin = "    1.8rem 27.7rem 0 1.9rem";
  smallLine.classList.add("active3");
  smallLine.classList.remove("active1");
  smallLine.classList.remove("active2");
  surfaceplanet1.style.display = "none";
  surfaceplanet2.style.display = "none";
  surfaceplanet3.style.display = "none";
  surfaceplanet4.style.display = "none";
  surfaceplanet5.style.display = "none";
  surfaceplanet6.style.display = "none";
  surfaceplanet7.style.display = "none";
  surfaceplanet8.style.display = "none";
  planet1.style.display = "none";
  planet2.style.display = "none";
  planet3.style.display = "none";
  planet4.style.display = "none";
  planet5.style.display = "none";
  planet6.style.display = "none";
  planet7.style.display = "none";
  planet8.style.display = "none";
  structurePlanet1.style.display = "none";
  structurePlanet2.style.display = "none";
  structurePlanet3.style.display = "none";
  structurePlanet4.style.display = "none";
  structurePlanet5.style.display = "none";
  structurePlanet6.style.display = "none";
  structurePlanet7.style.display = "none";
  structurePlanet8.style.display = "none";
  planet1.style.position = "";
  planet2.style.position = "";
  planet3.style.position = "";
  planet4.style.position = "";
  planet5.style.position = "";
  planet6.style.position = "";
  planet7.style.position = "";
  planet8.style.position = "";

  Mercury.style.marginTop = "";
  if (Name.textContent === "MERCURY") {
    Paragraph.textContent = `Mercury is the smallest planet in the Solar System and the closest to
  the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
  of all the Sun's planets. Mercury is one of four terrestrial planets in
  the Solar System, and is a rocky body like Earth.`;
    structurePlanet1.style.display = "none";
    planet1.style.display = "block";
  } else if (Name.textContent === "VENUS") {
    Paragraph.textContent = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`;
    structurePlanet2.style.display = "none";
    planet2.style.display = "block";
  } else if (Name.textContent === "EARTH") {
    Paragraph.textContent = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`;
    structurePlanet3.style.display = "none";
    planet3.style.display = "block";
  } else if (Name.textContent === "MARS") {
    structurePlanet4.style.display = "none";
    planet4.style.display = "block";
    Paragraph.textContent = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`;
  } else if (Name.textContent === "JUPITER") {
    Paragraph.textContent = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`;
    structurePlanet5.style.display = "none";
    planet5.style.display = "block";
  } else if (Name.textContent === "SATURN") {
    Paragraph.textContent = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`;
    structurePlanet6.style.display = "none";
    planet6.style.display = "block";
  } else if (Name.textContent === "URANUS") {
    Paragraph.textContent = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`;
    structurePlanet7.style.display = "none";
    planet7.style.display = "block";
  } else if (Name.textContent === "NEPTUNE") {
    Paragraph.textContent = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`;
    structurePlanet8.style.display = "none";
    planet8.style.display = "block";
  }
}

ChoosePlanet2.forEach((element) => {
  rotation.forEach((elementrotation) => {
    let rotation = elementrotation.children[0];
    let rotationchildren = rotation.children[1];
    let rotation1 = elementrotation.children[1];
    let rotationchildren1 = rotation1.children[1];
    let rotation2 = elementrotation.children[2];
    let rotationchildren2 = rotation2.children[1];
    let rotation3 = elementrotation.children[3];
    let rotationchildren3 = rotation3.children[1];
    let number = true;
    HRConteienr.addEventListener("click", function () {
      if (number) {
        document.getElementById("None").style.display = "none";
        document.body.style.backgroundImage = "none";
        ChoosePlanet.style.display = "block";
        number = false;
      } else {
        document.getElementById("None").style.display = "block";
        document.body.style.backgroundImage = "block";
        ChoosePlanet.style.display = "";
        number = true;
      }
    });

    element.children[0].addEventListener("click", function () {
      planet1.style.display = "none";
      planet2.style.display = "none";
      planet3.style.display = "none";
      planet4.style.display = "none";
      planet5.style.display = "none";
      planet6.style.display = "none";
      planet7.style.display = "none";
      planet8.style.display = "none";
      structurePlanet1.style.display = "none";
      structurePlanet2.style.display = "none";
      structurePlanet3.style.display = "none";
      structurePlanet4.style.display = "none";
      structurePlanet5.style.display = "none";
      structurePlanet6.style.display = "none";
      structurePlanet7.style.display = "none";
      structurePlanet8.style.display = "none";
      surfaceplanet1.style.display = "none";
      surfaceplanet2.style.display = "none";
      surfaceplanet3.style.display = "none";
      surfaceplanet4.style.display = "none";
      surfaceplanet5.style.display = "none";
      surfaceplanet6.style.display = "none";
      surfaceplanet7.style.display = "none";
      surfaceplanet8.style.display = "none";
      number = true;
      document.getElementById("None").style.display = "block";
      document.body.style.backgroundImage = "block";
      ChoosePlanet.style.display = "none";

      Name.textContent = "MERCURY";
      Paragraph.textContent = `          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.`;
      rotationchildren.textContent = "58.6 days";
      rotationchildren1.textContent = "87.97 days";
      rotationchildren2.textContent = "2,439.7 km";
      rotationchildren3.textContent = "430°c";

      if (smallLine.classList.contains("active1")) {
        structurePlanet1.style.display = "block";
      } else if (smallLine.classList.contains("active2")) {
        surfaceplanet1.style.display = "block";
        surfaceplanet1.style.position = "relative";
        surfaceplanet1.style.width = "65px";
        surfaceplanet1.style.height = "65px";
        surfaceplanet1.style.top = "100px";
        surfaceplanet1.style.left = "23px";

        planet1.style.display = "block";
        planet1.style.position = "absolute";
        Mercury.style.marginTop = "15rem";
      } else {
        planet1.style.display = "block";
      }
    });
    element.children[1].addEventListener("click", function () {
      planet1.style.display = "none";
      planet2.style.display = "none";
      planet3.style.display = "none";
      planet4.style.display = "none";
      planet5.style.display = "none";
      planet6.style.display = "none";
      planet7.style.display = "none";
      planet8.style.display = "none";
      structurePlanet1.style.display = "none";
      structurePlanet2.style.display = "none";
      structurePlanet3.style.display = "none";
      structurePlanet4.style.display = "none";
      structurePlanet5.style.display = "none";
      structurePlanet6.style.display = "none";
      structurePlanet7.style.display = "none";
      structurePlanet8.style.display = "none";
      surfaceplanet1.style.display = "none";
      surfaceplanet2.style.display = "none";
      surfaceplanet3.style.display = "none";
      surfaceplanet4.style.display = "none";
      surfaceplanet5.style.display = "none";
      surfaceplanet6.style.display = "none";
      surfaceplanet7.style.display = "none";
      surfaceplanet8.style.display = "none";
      number = true;

      document.getElementById("None").style.display = "block";
      document.body.style.backgroundImage = "block";
      ChoosePlanet.style.display = "none";
      if (smallLine.classList.contains("active1")) {
        structurePlanet2.style.display = "block";
      } else if (smallLine.classList.contains("active2")) {
        surfaceplanet2.style.display = "block";
        surfaceplanet2.style.position = "relative";
        surfaceplanet2.style.width = "90px";
        surfaceplanet2.style.height = "90px";
        surfaceplanet2.style.top = "110px";
        surfaceplanet2.style.left = "32px";

        planet2.style.display = "block";
        planet2.style.position = "absolute";
        Mercury.style.marginTop = "15rem";
      } else {
        planet2.style.display = "block";
      }

      Name.textContent = "VENUS";
      Paragraph.textContent = `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.`;
      rotationchildren.textContent = "243 days";
      rotationchildren1.textContent = "224.7 days";
      rotationchildren2.textContent = "6,051.8 km";
      rotationchildren3.textContent = "471°c";
      link.href =
        "https://xmf.wikipedia.org/wiki/%E1%83%95%E1%83%94%E1%83%9C%E1%83%94%E1%83%A0%E1%83%90_(%E1%83%9E%E1%83%9A%E1%83%90%E1%83%9C%E1%83%94%E1%83%A2%E1%83%90)";
    });
    element.children[2].addEventListener("click", function () {
      planet1.style.display = "none";
      planet2.style.display = "none";
      planet3.style.display = "none";
      planet4.style.display = "none";
      planet5.style.display = "none";
      planet6.style.display = "none";
      planet7.style.display = "none";
      planet8.style.display = "none";
      structurePlanet1.style.display = "none";
      structurePlanet2.style.display = "none";
      structurePlanet3.style.display = "none";
      structurePlanet4.style.display = "none";
      structurePlanet5.style.display = "none";
      structurePlanet6.style.display = "none";
      structurePlanet7.style.display = "none";
      structurePlanet8.style.display = "none";
      surfaceplanet1.style.display = "none";
      surfaceplanet2.style.display = "none";
      surfaceplanet3.style.display = "none";
      surfaceplanet4.style.display = "none";
      surfaceplanet5.style.display = "none";
      surfaceplanet6.style.display = "none";
      surfaceplanet7.style.display = "none";
      surfaceplanet8.style.display = "none";
      number = true;

      document.getElementById("None").style.display = "block";
      document.body.style.backgroundImage = "block";
      ChoosePlanet.style.display = "none";
      if (smallLine.classList.contains("active1")) {
        structurePlanet3.style.display = "block";
      } else if (smallLine.classList.contains("active2")) {
        surfaceplanet3.style.display = "block";
        surfaceplanet3.style.position = "relative";
        surfaceplanet3.style.width = "90px";
        surfaceplanet3.style.height = "90px";
        surfaceplanet3.style.top = "121px";
        surfaceplanet3.style.left = "41px";

        planet3.style.display = "block";
        planet3.style.position = "absolute";
        Mercury.style.marginTop = "15rem";
      } else {
        planet3.style.display = "block";
      }
      Name.textContent = "EARTH";
      Paragraph.textContent = `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`;
      rotationchildren.textContent = "0.99 days";
      rotationchildren1.textContent = "365.26 days";
      rotationchildren2.textContent = "6,371 km";
      rotationchildren3.textContent = "16°c";
      link.href =
        "https://ka.wikipedia.org/wiki/%E1%83%93%E1%83%94%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%AC%E1%83%90";
    });
    element.children[3].addEventListener("click", function () {
      planet1.style.display = "none";
      planet2.style.display = "none";
      planet3.style.display = "none";
      planet4.style.display = "none";
      planet5.style.display = "none";
      planet6.style.display = "none";
      planet7.style.display = "none";
      planet8.style.display = "none";
      structurePlanet1.style.display = "none";
      structurePlanet2.style.display = "none";
      structurePlanet3.style.display = "none";
      structurePlanet4.style.display = "none";
      structurePlanet5.style.display = "none";
      structurePlanet6.style.display = "none";
      structurePlanet7.style.display = "none";
      structurePlanet8.style.display = "none";
      surfaceplanet1.style.display = "none";
      surfaceplanet2.style.display = "none";
      surfaceplanet3.style.display = "none";
      surfaceplanet4.style.display = "none";
      surfaceplanet5.style.display = "none";
      surfaceplanet6.style.display = "none";
      surfaceplanet7.style.display = "none";
      surfaceplanet8.style.display = "none";
      number = true;

      document.getElementById("None").style.display = "block";
      document.body.style.backgroundImage = "block";
      ChoosePlanet.style.display = "none";
      if (smallLine.classList.contains("active1")) {
        structurePlanet4.style.display = "block";
      } else if (smallLine.classList.contains("active2")) {
        surfaceplanet4.style.display = "block";
        surfaceplanet4.style.position = "relative";
        surfaceplanet4.style.width = "80px";
        surfaceplanet4.style.height = "80px";
        surfaceplanet4.style.top = "104px";
        surfaceplanet4.style.left = "25px";

        planet4.style.display = "block";
        planet4.style.position = "absolute";
        Mercury.style.marginTop = "15rem";
      } else {
        planet4.style.display = "block";
      }
      Name.textContent = "MARS";
      Paragraph.textContent = `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".`;
      rotationchildren.textContent = "1.03 days";
      rotationchildren1.textContent = "1.88 years";
      rotationchildren2.textContent = "3,389.5 km";
      rotationchildren3.textContent = "−28°c";
      link.href =
        "https://ka.wikipedia.org/wiki/%E1%83%9B%E1%83%90%E1%83%A0%E1%83%A1%E1%83%98";
    });

    element.children[4].addEventListener("click", function () {
      planet1.style.display = "none";
      planet2.style.display = "none";
      planet3.style.display = "none";
      planet4.style.display = "none";
      planet5.style.display = "none";
      planet6.style.display = "none";
      planet7.style.display = "none";
      planet8.style.display = "none";
      structurePlanet1.style.display = "none";
      structurePlanet2.style.display = "none";
      structurePlanet3.style.display = "none";
      structurePlanet4.style.display = "none";
      structurePlanet5.style.display = "none";
      structurePlanet6.style.display = "none";
      structurePlanet7.style.display = "none";
      structurePlanet8.style.display = "none";
      surfaceplanet1.style.display = "none";
      surfaceplanet2.style.display = "none";
      surfaceplanet3.style.display = "none";
      surfaceplanet4.style.display = "none";
      surfaceplanet5.style.display = "none";
      surfaceplanet6.style.display = "none";
      surfaceplanet7.style.display = "none";
      surfaceplanet8.style.display = "none";
      number = true;

      document.getElementById("None").style.display = "block";
      document.body.style.backgroundImage = "block";
      ChoosePlanet.style.display = "none";
      if (smallLine.classList.contains("active1")) {
        structurePlanet5.style.display = "block";
      } else if (smallLine.classList.contains("active2")) {
        surfaceplanet5.style.display = "block";
        surfaceplanet5.style.position = "relative";
        surfaceplanet5.style.width = "70px";
        surfaceplanet5.style.height = "70px";
        surfaceplanet5.style.top = "148px";
        surfaceplanet5.style.left = "78px";

        planet5.style.display = "block";
        planet5.style.position = "absolute";
        Mercury.style.marginTop = "23rem";
      } else {
        planet5.style.display = "block";
      }
      Name.textContent = "JUPITER";
      Paragraph.textContent = `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.`;
      rotationchildren.textContent = "9.93 hours";
      rotationchildren1.textContent = "11.86 years";
      rotationchildren2.textContent = "69,911 km";
      rotationchildren3.textContent = "-108°c";
      link.href =
        "https://ka.wikipedia.org/wiki/%E1%83%98%E1%83%A3%E1%83%9E%E1%83%98%E1%83%A2%E1%83%94%E1%83%A0%E1%83%98";
    });

    element.children[5].addEventListener("click", function () {
      planet1.style.display = "none";
      planet2.style.display = "none";
      planet3.style.display = "none";
      planet4.style.display = "none";
      planet5.style.display = "none";
      planet6.style.display = "none";
      planet7.style.display = "none";
      planet8.style.display = "none";
      structurePlanet1.style.display = "none";
      structurePlanet2.style.display = "none";
      structurePlanet3.style.display = "none";
      structurePlanet4.style.display = "none";
      structurePlanet5.style.display = "none";
      structurePlanet6.style.display = "none";
      structurePlanet7.style.display = "none";
      structurePlanet8.style.display = "none";
      surfaceplanet1.style.display = "none";
      surfaceplanet2.style.display = "none";
      surfaceplanet3.style.display = "none";
      surfaceplanet4.style.display = "none";
      surfaceplanet5.style.display = "none";
      surfaceplanet6.style.display = "none";
      surfaceplanet7.style.display = "none";
      surfaceplanet8.style.display = "none";
      number = true;

      document.getElementById("None").style.display = "block";
      document.body.style.backgroundImage = "block";
      ChoosePlanet.style.display = "none";
      if (smallLine.classList.contains("active1")) {
        structurePlanet6.style.display = "block";
      } else if (smallLine.classList.contains("active2")) {
        surfaceplanet6.style.display = "block";
        surfaceplanet6.style.position = "relative";
        surfaceplanet6.style.width = "70px";
        surfaceplanet6.style.height = "70px";
        surfaceplanet6.style.top = "152px";
        surfaceplanet6.style.left = "93px";

        planet6.style.display = "block";
        planet6.style.position = "absolute";
        Mercury.style.marginTop = "27rem";
      } else {
        planet6.style.display = "block";
      }
      Name.textContent = "SATURN";
      Paragraph.textContent = `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.`;
      rotationchildren.textContent = "10.8 hours";
      rotationchildren1.textContent = "29.46 years";
      rotationchildren2.textContent = "58,232 km";
      rotationchildren3.textContent = "-138°c";
      link.href =
        "https://ka.wikipedia.org/wiki/%E1%83%A1%E1%83%90%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%9C%E1%83%98";
    });

    element.children[6].addEventListener("click", function () {
      planet1.style.display = "none";
      planet2.style.display = "none";
      planet3.style.display = "none";
      planet4.style.display = "none";
      planet5.style.display = "none";
      planet6.style.display = "none";
      planet7.style.display = "none";
      planet8.style.display = "none";
      structurePlanet1.style.display = "none";
      structurePlanet2.style.display = "none";
      structurePlanet3.style.display = "none";
      structurePlanet4.style.display = "none";
      structurePlanet5.style.display = "none";
      structurePlanet6.style.display = "none";
      structurePlanet7.style.display = "none";
      structurePlanet8.style.display = "none";
      surfaceplanet1.style.display = "none";
      surfaceplanet2.style.display = "none";
      surfaceplanet3.style.display = "none";
      surfaceplanet4.style.display = "none";
      surfaceplanet5.style.display = "none";
      surfaceplanet6.style.display = "none";
      surfaceplanet7.style.display = "none";
      surfaceplanet8.style.display = "none";
      number = true;

      document.getElementById("None").style.display = "block";
      document.body.style.backgroundImage = "block";
      ChoosePlanet.style.display = "none";
      if (smallLine.classList.contains("active1")) {
        structurePlanet7.style.display = "block";
      } else if (smallLine.classList.contains("active2")) {
        surfaceplanet7.style.display = "block";
        surfaceplanet7.style.position = "relative";
        surfaceplanet7.style.width = "70px";
        surfaceplanet7.style.height = "70px";
        surfaceplanet7.style.top = "129px";
        surfaceplanet7.style.left = "54px";

        planet7.style.display = "block";
        planet7.style.position = "absolute";
        Mercury.style.marginTop = "22rem";
      } else {
        planet7.style.display = "block";
      }
      Name.textContent = "URANUS";
      Paragraph.textContent = `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`;
      rotationchildren.textContent = "17.2 hours";
      rotationchildren1.textContent = "84 years";
      rotationchildren2.textContent = "25,362 km";
      rotationchildren3.textContent = "-195°c";
      link.href =
        "https://ka.wikipedia.org/wiki/%E1%83%A3%E1%83%A0%E1%83%90%E1%83%9C%E1%83%98";
    });

    element.children[7].addEventListener("click", function () {
      planet1.style.display = "none";
      planet2.style.display = "none";
      planet3.style.display = "none";
      planet4.style.display = "none";
      planet5.style.display = "none";
      planet6.style.display = "none";
      planet7.style.display = "none";
      planet8.style.display = "none";
      structurePlanet1.style.display = "none";
      structurePlanet2.style.display = "none";
      structurePlanet3.style.display = "none";
      structurePlanet4.style.display = "none";
      structurePlanet5.style.display = "none";
      structurePlanet6.style.display = "none";
      structurePlanet7.style.display = "none";
      structurePlanet8.style.display = "none";
      surfaceplanet1.style.display = "none";
      surfaceplanet2.style.display = "none";
      surfaceplanet3.style.display = "none";
      surfaceplanet4.style.display = "none";
      surfaceplanet5.style.display = "none";
      surfaceplanet6.style.display = "none";
      surfaceplanet7.style.display = "none";
      surfaceplanet8.style.display = "none";
      number = true;

      document.getElementById("None").style.display = "block";
      document.body.style.backgroundImage = "block";
      ChoosePlanet.style.display = "none";
      if (smallLine.classList.contains("active1")) {
        structurePlanet8.style.display = "block";
      } else if (smallLine.classList.contains("active2")) {
        surfaceplanet8.style.display = "block";
        surfaceplanet8.style.position = "relative";
        surfaceplanet8.style.width = "70px";
        surfaceplanet8.style.height = "70px";
        surfaceplanet8.style.top = "129px";
        surfaceplanet8.style.left = "52px";

        planet8.style.display = "block";
        planet8.style.position = "absolute";
        Mercury.style.marginTop = "22rem";
      } else {
        planet8.style.display = "block";
      }
      Name.textContent = "NEPTUNE";
      Paragraph.textContent = `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.`;
      rotationchildren.textContent = "16.08 hours";
      rotationchildren1.textContent = "164.79 years";
      rotationchildren2.textContent = "24,622 km";
      rotationchildren3.textContent = "-201°c";
      link.href =
        "https://ka.wikipedia.org/wiki/%E1%83%9C%E1%83%94%E1%83%9E%E1%83%A2%E1%83%A3%E1%83%9C%E1%83%98";
    });
  });
});
