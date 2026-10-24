# Photos

Real photos of places, animals and planets from **Wikimedia Commons**, each under a free licence (public
domain, CC0, CC BY or CC BY-SA), resized to 500 px wide (JPEG for ordinary photos, PNG for most astronomy
images, as Commons hosts them). Downloaded with `scripts/fetch-photos.mjs`, which keeps only free licences
and records the credits in `src/library/photo-credits.json` (the app shows the credit under each photo).

Country flags are a separate set at `public/flags/<id>.svg` — the original vector file from Commons (not
resized), downloaded with `scripts/fetch-flags.mjs`, credited under a `flag-<id>` key in the same
`photo-credits.json` so it can't collide with a place or animal id. National flags are almost always public
domain (simple government symbols) or released by their Commons uploader under a free licence.

| Photo | Author | Licence | Source |
|---|---|---|---|
| places/eiffel-tower.jpg | Benh LIEU SONG | Public domain | https://commons.wikimedia.org/wiki/File:Tour_Eiffel_Wikimedia_Commons_(cropped).jpg |
| places/arc-de-triomphe.jpg | ZeusUpsistos | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Arc_de_Triomphe_-_Ao%C3%BBt_2026.jpg |
| places/versailles.jpg | ToucanWings | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Vue_a%C3%A9rienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_081_(cropped).jpg |
| places/brandenburg-gate.jpg | Thomas Wolf, www.foto-tw.de | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Brandenburger_Tor_abends.jpg |
| places/neuschwanstein.jpg | Thomas Wolf, www.foto-tw.de | CC BY-SA 3.0 de | https://commons.wikimedia.org/wiki/File:Schloss_Neuschwanstein_2013.jpg |
| places/berlin-tv-tower.jpg | Christian Wolf (www.c-w-design.de) | CC BY-SA 3.0 de | https://commons.wikimedia.org/wiki/File:Berliner_Fernsehturm,_Sicht_vom_Neptunbrunnen_-_Berlin_Mitte.jpg |
| places/national-theatre-lagos.jpg | Godiva Omoruyi | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:National_Theatre_Nigeria.jpg |
| places/zuma-rock.jpg | Jeff Attaway | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Zuma_Rock.jpg |
| places/olumo-rock.jpg | AdeolaStudio | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Olumo_Rock_in_Abeokuta.jpg |
| places/taj-mahal.jpg | Yann; edited by Jim Carter | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Taj_Mahal_(Edited).jpeg |
| places/statue-of-liberty.jpg | AskALotl | CC0 | https://commons.wikimedia.org/wiki/File:Front_view_of_Statue_of_Liberty_(cropped).jpg |
| places/golden-gate-bridge.jpg | Frank Schulenburg | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Golden_Gate_Bridge_as_seen_from_Battery_East.jpg |
| places/grand-canyon.jpg | Lennart Sikkema | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Canyon_River_Tree_(165872763).jpeg |
| places/big-ben.jpg | Christian David | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Elizabeth_Tower_and_the_north_front_of_the_Palace_of_Westminster,_London.jpg |
| places/tower-bridge.jpg | Fuzzypiggy | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Tower_Bridge_at_Dawn.jpg |
| places/stonehenge.jpg | garethwiscombe | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Stonehenge2007_07_30.jpg |
| places/colosseum.jpg | FeaturedPics | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Colosseo_2020.jpg |
| places/leaning-tower-pisa.jpg | Arne Müseler | CC BY-SA 3.0 de | https://commons.wikimedia.org/wiki/File:Italy_-_Pisa_-_Leaning_Tower.jpg |
| places/great-wall.jpg | Severin.stalder | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:The_Great_Wall_of_China_at_Jinshanling-edit.jpg |
| places/giza-pyramids.jpg | KennyOMG | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Pyramids_of_the_Giza_Necropolis.jpg |
| places/sphinx.jpg | Hesham Ebaid | CC0 | https://commons.wikimedia.org/wiki/File:Sphinx_with_the_third_pyramid.jpg |
| places/sydney-opera-house.jpg | Bernard Spragg. NZ from Christchurch, New Zealand | CC0 | https://commons.wikimedia.org/wiki/File:Sydney_Australia._(21339175489).jpg |
| places/uluru.jpg | Ek2030372672 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:ULURU.jpg |
| places/machu-picchu.jpg | Draceane | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Machu_Picchu,_2023_(012).jpg |
| places/kilimanjaro.jpg | Sergey Pesterev | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Kilimanjaro_from_Amboseli.jpg |
| places/victoria-falls.jpg | Diego Delso | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Cataratas_Victoria,_Zambia-Zimbabue,_2018-07-27,_DD_04.jpg |
| places/table-mountain.jpg | Danie van der Merwe from Cape Town, South Africa | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Table_Mountain_DanieVDM.jpg |
| places/petra.jpg | Azurfrog | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Al_Deir_Petra.JPG |
| places/mount-fuji.jpg | Suicasmo | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg |
| places/burj-khalifa.jpg | Gfilip | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Burj_Khalifa_from_Safa_Park.jpg |
| places/cn-tower.jpg | Jchmrt | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Toronto-CN-tower-and-Canadian-flag-skyline.jpg |
| places/atomium.jpg | Trougnouf (Benoit Brummer) | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:The_Atomium_during_civil_twilight_(DSCF1135).jpg |
| places/kinderdijk.jpg | Lucas Hirschegger | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:KinderdijkMolens02.jpg |
| places/rhine-falls.jpg | Kabelleger / David Gubler | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:SBB_RABe_514_DTZ_Rheinfall.jpg |
| places/nyhavn.jpg | European Commission | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:The_Nyhavn_Canal_3.jpg |
| places/moai.jpg | Ian Sewell | CC BY 2.5 | https://commons.wikimedia.org/wiki/File:AhuTongariki.JPG |
| places/alhambra.jpg | Jebulon | CC0 | https://commons.wikimedia.org/wiki/File:Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg |
| places/sugarloaf.jpg | Arne Müseler | CC BY-SA 3.0 de | https://commons.wikimedia.org/wiki/File:P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg |
| places/maasai-mara.jpg | Danijel Mihajlovic | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Masai_Mara_at_Sunset.jpg |
| places/schonbrunn.jpg | C.Stadler/Bwag | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Wien_-_Schloss_Sch%C3%B6nbrunn.JPG |
| animals/fox.jpg | ClaudiaTen | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Portrait_of_a_red_fox_in_Rautas_fj%C3%A4llurskog_(cropped).jpg |
| animals/owl.jpg | Martin Mecnarowski (http://www.photomecan.eu/) | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Strix_aluco_3_(Martin_Mecnarowski).jpg |
| animals/hedgehog.jpg | Jörg Hempel | CC BY-SA 2.0 de | https://commons.wikimedia.org/wiki/File:Erinaceus_europaeus_LC0119.jpg |
| animals/elephant.jpg | Giles Laurent | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:178_Male_African_bush_elephant_in_Etosha_National_Park_Photo_by_Giles_Laurent.jpg |
| animals/giraffe.jpg | Ray in Manila | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Masai_Giraffe,_Maasai_Mara_(46364250252).jpg |
| animals/penguin.jpg | Ian Duffy from UK | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Aptenodytes_forsteri_-Snow_Hill_Island,_Antarctica_-adults_and_juvenile-8.jpg |
| animals/dolphin.jpg | NASA | Public domain | https://commons.wikimedia.org/wiki/File:Tursiops_truncatus_01-cropped.jpg |
| animals/lion.jpg | Giles Laurent | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg |
| animals/panda.jpg | J. Patrick Fischer | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Grosser_Panda.JPG |
| animals/koala.jpg | Diliff | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Koala_climbing_tree.jpg |
| animals/turtle.jpg | Orchi | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Testudo_hermanni_hermanni_Mallorca_02.jpg |
| animals/butterfly.jpg | Kenneth Dwain Harrelson | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Monarch_In_May.jpg |
| animals/honeybee.jpg | Andreas Trepte | CC BY-SA 2.5 | https://commons.wikimedia.org/wiki/File:Apis_mellifera_Western_honey_bee.jpg |
| animals/octopus.jpg | albert kok | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Octopus2.jpg |
| animals/frog.jpg | Richard Bartz, Munich aka Makro Freak Image:MFB.jpg | CC BY-SA 2.5 | https://commons.wikimedia.org/wiki/File:European_Common_Frog_Rana_temporaria.jpg |
| animals/rabbit.jpg | euqirneto | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Oryctolagus_cuniculus_-_euqirneto_-_419737670_(cropped).jpeg |
| animals/chipmunk.jpg | Rhododendrites | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Chipmunk_with_stuffed_cheeks_in_Prospect_Park_(05980).jpg |
| animals/bear.jpg | Yathin S Krishnappa | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:2010-kodiak-bear-1.jpg |
| animals/tiger.jpg | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Bengal_tiger_(Panthera_tigris_tigris)_female_3_crop.jpg |
| animals/zebra.jpg | Yathin S Krishnappa | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Equus_quagga_burchellii_-_Etosha,_2014.jpg |
| animals/kangaroo.jpg | PotMart186 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Red_Kangaroos_at_Sturt_National_Park_NSW.jpg |
| animals/spouting-whale.jpg | Juan Cruzado Cortés | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Humpback_whale_breaching_off_Cabo_San_Lucas.jpg |
| animals/parrot.jpg | Florettesokeng | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Perroquet_%C3%A0_Yampopo_Beach_-_Douala.jpg |
| animals/flamingo.jpg | Giles Laurent | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:010_Greater_flamingos_male_and_female_in_the_Camargue_during_mating_season_Photo_by_Giles_Laurent.jpg |
| animals/snail.jpg | Unknown | Public domain | https://commons.wikimedia.org/wiki/File:Snail1web.jpg |
| animals/lady-beetle.jpg | Photographer: Dominik Stodulski Graphic Processing: User:MathKnight | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:7-Spotted-Ladybug-Coccinella-septempunctata-sq1.jpg |
| animals/crab.jpg | Hans Hillewaert | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Carcinus_maenas.jpg |
| animals/horse.jpg | Nokota_Horses.jpg: François Marchal derivative work: Dana boomer (talk) | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Nokota_Horses_cropped.jpg |
| animals/cow.jpg | Kim Hansen | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Cow_(Fleckvieh_breed)_Oeschinensee_Slaunger_2009-07-07.jpg |
| animals/hippopotamus.jpg | Muhammad Mahdi Karim | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Portrait_Hippopotamus_in_the_water.jpg |
| animals/camel.jpg | Florian Prischl | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Camelus_dromedarius_in_Nuweiba.jpg |
| animals/bat.jpg | Drahkrub | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Pipistrellus_female-1.jpg |
| animals/peacock.jpg | Marlon Bunday | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Peacock_In_Full_Display_(174382481).jpeg |
| animals/shark.jpg | Pterantula (Terry Goss) at en.wikipedia | CC BY 2.5 | https://commons.wikimedia.org/wiki/File:White_shark.jpg |
| animals/sloth.jpg | Stefan Laube (Tauchgurke) | Public domain | https://commons.wikimedia.org/wiki/File:Bradypus.jpg |
| animals/otter.jpg | Marshal Hedin from San Diego | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:Sea_Otter_(Enhydra_lutris)_(25169790524)_crop.jpg |
| animals/beaver.jpg | Steve from Washington, DC, USA | CC BY-SA 2.0 | https://commons.wikimedia.org/wiki/File:American_Beaver.jpg |
| animals/seal.jpg | Charles J. Sharp | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Common_seal_(Phoca_vitulina)_2.jpg |
| animals/swan.jpg | Sanchezn | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:CygneVaires.jpg |
| animals/mouse.jpg | Unknown authorUnknown author (original) / Ilmari Karonen (editing) | Public domain | https://commons.wikimedia.org/wiki/File:Mouse_white_background.jpg |
| earth/nile.jpg | Fiktube | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Beautiful_nature_along_Nile_River_01.jpg |
| earth/amazon.jpg | European Space Agency | CC BY-SA 3.0 igo | https://commons.wikimedia.org/wiki/File:Amazon_River_ESA387332.jpg |
| earth/yangtze.jpg | Andrew Hitchcock | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Dusk_on_the_Yangtze_River.jpg |
| earth/mississippi.jpg | NPS photo | Public domain | https://commons.wikimedia.org/wiki/File:Efmo_View_from_Fire_Point.jpg |
| earth/danube.jpg | Visions of Domino | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:View_from_Gell%C3%A9rt_Hill_to_the_Danube,_Hungary_-_Budapest_(28493220635).jpg |
| earth/niger.jpg | NigerTZai | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Niger,_Niamey,_Pont_Kennedy_(1).jpg |
| earth/ganges.jpg | Babasteve | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Varanasiganga.jpg |
| earth/pacific.png | CIA World Factbook | Public domain | https://commons.wikimedia.org/wiki/File:Pacific_Ocean_-_en.png |
| earth/atlantic.png | CIA | Public domain | https://commons.wikimedia.org/wiki/File:Atlantic_Ocean_-_en.png |
| earth/indian-ocean.png | United States Central Intelligence Agency | Public domain | https://commons.wikimedia.org/wiki/File:Indian_Ocean-CIA_WFB_Map.png |
| earth/southern-ocean.png | Connormah (talk · contribs) | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Location_Southern_Ocean.svg |
| earth/arctic.png | CIA | Public domain | https://commons.wikimedia.org/wiki/File:Arctic_Ocean_-_en.png |
| earth/vesuvius.jpg | pietro scerrato | CC BY 3.0 | https://commons.wikimedia.org/wiki/File:Il_cratere_del_Vulcano_-_panoramio.jpg |
| earth/krakatoa.jpg | Lithograph: Parker & Coward, Britain; | Public domain | https://commons.wikimedia.org/wiki/File:Krakatoa_eruption_lithograph.jpg |
| earth/maunaloa.jpg | J.D. Griggs | Public domain | https://commons.wikimedia.org/wiki/File:Mauna_Loa_Volcano.jpg |
| earth/sthelens.jpg | Lyn Topinka | Public domain | https://commons.wikimedia.org/wiki/File:MSH82_st_helens_plume_from_harrys_ridge_05-19-82.jpg |
| earth/etna.jpg | BenAveling | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Mt_Etna_and_Catania1.jpg |
| earth/popocatepetl.jpg | Jakub Hejtmánek | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Mexico-Popocatepetl.jpg |
| earth/igneous.jpg | James St. John | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Basalt_12_(48674276333).jpg |
| earth/sedimentary.jpg | Michael C. Rygel | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Channel-StellartonFm-CoalburnPit.JPG |
| earth/metamorphic.jpg | No machine-readable author provided. Siim assumed (based on copyright claims). | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Quartzite.jpg |
| maps/world.svg (not resized, original vector) | STyx | Public domain | https://commons.wikimedia.org/wiki/File:World_location_map.svg |
| planets/mercury.jpg | NASA/Johns Hopkins University Applied Physics Laboratory/Arizona State University/Carnegie Institution of Washington | Public domain | https://commons.wikimedia.org/wiki/File:Mercury_in_true_color.jpg |
| planets/venus.jpg | NASA/JPL-Caltech | Public domain | https://commons.wikimedia.org/wiki/File:Venus_from_Mariner_10.jpg |
| planets/earth.jpg | NASA/Apollo 17 crew; taken by either Harrison Schmitt or Ron Evans | Public domain | https://commons.wikimedia.org/wiki/File:The_Earth_seen_from_Apollo_17.jpg |
| planets/mars.png | Kevin Gill from Los Angeles, CA, United States | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png |
| planets/jupiter.png | NASA/STSCI (S.T.A.R.S) | Public domain | https://commons.wikimedia.org/wiki/File:Jupiter_OPAL_2024.png |
| planets/saturn.png | NASA / JPL-Caltech / SSI / color composite by Gordan Ugarkovic | Public domain | https://commons.wikimedia.org/wiki/File:Saturn_global_view_from_Cassini,_rings_open_Better_Colour.png |
| planets/uranus.png | Ardenau4 | CC0 | https://commons.wikimedia.org/wiki/File:Uranus_Voyager2_color_calibrated.png |
| planets/neptune.png | NASA / Voyager 2 / PDS / OPUS / Ardenau4 | CC0 | https://commons.wikimedia.org/wiki/File:Neptune_Voyager2_color_calibrated.png |
| planets/pluto.png | NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research Institute/Alex Parker | Public domain | https://commons.wikimedia.org/wiki/File:Pluto_in_True_Color_-_High-Res.png |
| flags/ae.svg | Abdulla Mohammed Al Maainah | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Arab_Emirates.svg |
| flags/ar.svg | Manuel Belgrano | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Argentina.svg |
| flags/at.svg | Bundesministerium für Landesverteidigung | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Austria.svg |
| flags/au.svg | Original: Ivor Evans, Leslie John Hawkins, Egbert John Nuttall, Annie Dorrington and William Stevens Vector: Ian Fieggen | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Australia.svg |
| flags/be.svg | Dbenbenn and others | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Belgium.svg |
| flags/br.svg | Raimundo Teixeira Mendes | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Brazil.svg |
| flags/ca.svg | Created by George F. G. Stanley / E Pluribus Anthony / User:Mzajac | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Canada.svg |
| flags/ch.svg | Original: Unknown Vector: User:Marc Mongenet Credits: User:-xfi- User:Zscout370 | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Switzerland.svg |
| flags/ci.svg | See File history below for details. | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_C%C3%B4te_d%27Ivoire.svg |
| flags/cn.svg | Zeng Liansong | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_the_People%27s_Republic_of_China.svg |
| flags/de.svg | User:SKopp, User:Madden, and other users | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Germany.svg |
| flags/dk.svg | Madden and others | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Denmark.svg |
| flags/ee.svg | Original: Unknown author Vector: SKopp, PeepP and ‍others | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Estonia.svg |
| flags/eg.svg | See File history below for details. | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Egypt.svg |
| flags/es.svg | RelShot 263, Echando una mano; earlier version was Pedro A. Gracia Fajardo, escudo de Manual de Imagen Institucional de | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Spain.svg |
| flags/fi.svg | Unknown | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Finland.svg |
| flags/fr.svg | Original: Unknown Vector: SKopp | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_France.svg |
| flags/ga.svg | Léon Augé and Pierre Claver Eyeghe | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Gabon.svg |
| flags/gb.svg | Original: Acts of Union 1800 Vector: Yaddah | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_the_United_Kingdom_(3-5).svg |
| flags/gh.svg | Theodosia Okoh | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Ghana.svg |
| flags/gn.svg | Unknown | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Guinea.svg |
| flags/hu.svg | SKopp | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Hungary.svg |
| flags/id.svg | Jayakatwang | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Indonesia.svg |
| flags/ie.svg | Éire | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Ireland.svg |
| flags/in.svg | Government of India | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_India.svg |
| flags/it.svg | See below. | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Italy.svg |
| flags/jp.svg | Various | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Japan.svg |
| flags/ke.svg | User:Pumbaa80 | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Kenya.svg |
| flags/kr.svg | Original: Government of the Republic of Korea Vector: Great Brightstar and others | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_South_Korea.svg |
| flags/ma.svg | Denelson83, Zscout370 | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Morocco.svg |
| flags/ml.svg | SKopp | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Mali.svg |
| flags/mx.svg | Omar Alejandro Covarrubias Neri, 9 April 2006. Based on the 1968 arms by Francisco Eppens Helguera and Juan Manuel Gabino | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Mexico.svg |
| flags/ng.svg | Jon Harald Søby. | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Nigeria.svg |
| flags/nl.svg | Zscout370 | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_the_Netherlands.svg |
| flags/nz.svg | Original: Albert Hastings Markham Vector: Zscout370, Hugh Jass, s. File history | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_New_Zealand.svg |
| flags/pe.svg | David Benbennick | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Peru.svg |
| flags/pl.svg | See below. | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Poland.svg |
| flags/pt.svg | Original: Columbano Bordalo Pinheiro (1910; generic design) Vector: Vítor Luís Rodrigues; António Martins-Tuválkin (2004) | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Portugal.svg |
| flags/se.svg | Jon Harald Søby and others. | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Sweden.svg |
| flags/sl.svg | Zscout370 | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Sierra_Leone.svg |
| flags/td.svg | SKopp & others (see upload log) | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Chad.svg |
| flags/th.svg | Zscout370 | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Thailand.svg |
| flags/ua.svg | Government of Ukraine | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_Ukraine.svg |
| flags/us.svg | Uploaded by Dbenbenn; edited by users such as Zscout370, Jacobolus, Indolences, and Technion. | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_the_United_States.svg |
| flags/ye.svg | 愛喝奶茶 | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Flag_of_Yemen.svg |
| flags/za.svg | Flag design by Frederick Brownell, image by Wikimedia Commons users | Public domain | https://commons.wikimedia.org/wiki/File:Flag_of_South_Africa.svg |
