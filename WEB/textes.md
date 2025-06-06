# Old Roads

Texte d’intro

- intro  
- expliquer carte de densité  
- expliquer les zones

Truc important à placer dans les slides, les deux première tranches de comparaison ce qui ressort c’est plutôt des gros éveénements (relié à l’histoire, ….) Tandis que dans la dernière tranche l’augmentation de la densité cible plutôt les zones résidentielle 

## Intro:

### **Explorer Lausanne à travers le temps : une ville en mutation**

Bienvenue sur notre plateforme interactive dédiée à l’étude historique de Lausanne par son réseau viaire. Ce site vous invite à plonger dans l’évolution urbaine de la ville à travers plus d’un siècle et demi de transformations, grâce à une série de cartes anciennes et contemporaines.

**Quel a été l’impact de l’urbanisation sur le territoire lausannois ? Où et quand les grands changements se sont-ils produits ?**  
Pour répondre à ces questions, nous avons analysé le réseau de voirie de Lausanne en quatre temps-clés : 1875, 1928, 1975 et 2025\. En découpant la ville en une mosaïque de zones (ou *patches*), nous avons mesuré la densité des routes à chaque époque et identifié les zones ayant connu les évolutions les plus marquantes dans ce domaine.

Le site propose une visualisation intuitive : des **sliders temporels** vous permettent de comparer dynamiquement les cartes de nos différentes années d’études, révélant instantanément les transformations du tissu urbain. Des **points d'information interactifs**, codés par couleur selon la période de transition (1875 \- 1928, 1928 \- 1975, 1975 \- 2025), signalent les zones de mutation majeure. En cliquant sur ces points, vous accédez à des fiches descriptives détaillant les changements observés et leur contexte historique.

**Notre objectif ?** Offrir un outil pédagogique et visuel pour comprendre comment Lausanne s’est développée, s’est étendue, et s’est structurée à travers ses routes. Ce projet mêle analyse spatiale, histoire urbaine et visualisation numérique pour vous faire redécouvrir la ville autrement.

Explorez, comparez, découvrez : **Lausanne n’a jamais cessé de changer… alors suivez ses traces \!**

## Méthodologie:

Pour comprendre les dynamiques d’évolution de Lausanne par son réseau viaire, nous avons mené une analyse spatiale comparative à partir de cartes historiques et contemporaines de la ville.

Nous avons sélectionné quatre années d’études en fonction des cartes à notre disposition: **1875, 1928, 1975** et **2025\.** Ces années permettent également d’avoir des périodes de transition avec une durée similaire d’environ cinquante ans à chaque fois. Ces cartes ont ensuite été retravaillées avec QGIS afin d’en vectoriser les routes:

- 2025: carte déjà vectorisée disponible sur SwissTopo **(???)**  
- 1975: création des routes vectorisées à partir de celles de 2025 et d’un fond de carte de 1975 en supprimant les routes n’y apparaissant pas

Ces données ont ensuite été exportées au format **GeoJSON**, ce qui nous a permis de les analyser à l’aide d’outils numériques: Python et sa librairie GeoPandas.

Afin d’évaluer l’évolution du réseau, nous avons découpé le territoire en une grille régulière de petites zones, appelées *patches*. Pour chaque patch, nous avons calculé la **densité de routes** (longueur totale des sections de routes au sein du patch). Cette approche nous a permis de comparer quantitativement les changements survenus entre deux périodes.

Nous avons ensuite identifié les **zones de changement majeur** en repérant les patches où la densité de voirie a connu les plus fortes variations entre deux dates consécutives :

- de 1875 à 1928  
- de 1928 à 1975  
- de 1975 à 2025

Ces zones ont fait l’objet d’un examen historique plus approfondi. Nous avons croisé les résultats de notre analyse spatiale avec des sources historiques (cartes anciennes, archives, documents urbanistiques, articles de presse) pour comprendre le contexte et les raisons des transformations observées : développements résidentiels, créations d’axes routiers majeurs, extensions urbaines.

Enfin, toutes ces informations ont été intégrées dans notre plateforme interactive. Les cartes comparatives permettent de visualiser directement les transformations, tandis que des **points d’information** indiquent les zones de changement significatif, avec un **code couleur** correspondant à la période concernée. Chaque point donne accès à une **fiche descriptive** retraçant l’évolution du secteur au fil du temps.

# 1875 \- 1928:

## **Zone 1: Cimetière du Bois-de-Vaux**

46.521987, 6.598470

[https://www.lausanne.ch/vie-pratique/nature/parc-promenades/cimetieres/cimetiere-du-bois-de-vaux.html](https://www.lausanne.ch/vie-pratique/nature/parc-promenades/cimetieres/cimetiere-du-bois-de-vaux.html)

Ce qui est aujourd’hui l’un des plus beaux cimetières de Suisse n’apparaît pas par hasard sur les cartes comme des chemins. Lorsqu’il fut construit au début du XXe siècle, c’est dans une optique de lieu de balade qu’il fut conçu et imaginé par son architecte Alphonse Laverrière.

Peut-être l’un des derniers changements majeurs visible entre 1875 et 1928, même si pas encore complet, il a un impact direct sur d’autres évolutions comme vous pouvez le voir sur le point de *La Pontaise.*

En effet, historiquement le domaine du Bois-de-Vaux se trouvait là avec la maison de maître bâtie en 1770\. Alors qu’au début du XXe siècle la ville de Lausanne connaît une période de forte croissance économique (la population double de plus en 30 ans, 30 000 en 1880, 64 000 en 1910), les autorités décident d’y construire un cimetière unique, suite à la désaffectation des cimetières de La Sallaz et de La Pontaise.

Les travaux commencèrent en 1922 pour finir vers 1951 d’où le net changement déjà visible, mais pas encore complet. Aujourd’hui il est dans l’inventaire cantonal des monuments historiques et des jardins historiques. De plus, de nombreuses personnalités y sont enterrées dont Pierre de Coubertin.

![][image1]

maison bois de vaux

## **Zone 2: Pontaise-Le Flon-La Louve**

46.531852, 6.631559  
[https://spr-renens.ch/?p=1966](https://spr-renens.ch/?p=1966)  
[https://serval.unil.ch/resource/serval:BIB\_EC99EA6B680D.P001/REF.pdf](https://serval.unil.ch/resource/serval:BIB_EC99EA6B680D.P001/REF.pdf)

Un enchaînement d’événements a amené au développement du quartier de La Pontaise dans les années en question. A l’origine, la ville de Lausanne se trouvait plutôt vers le bord du lac. Mais différentes circonstances ont poussé les habitants à se réfugier/monter dans les hauteurs, ce qui a abouti à la vieille ville actuelle, sur la colline. Cependant, celle ni était bien loin de ressembler à la colline actuelle. En effet, elle était entourée par 2 rivières, le Flon à l’ouest et la Louve à l’est, qui se rejoignaient en dessous pour finir dans le lac.  
Malheureusement, en 1832, une épidémie de choléra a fait rage dans la ville et incite la ville à procéder au voûtage du Flon et de la Louve.![][image2]  
Par la suite, Louis Gonin (1827-1898) et Jean-Jacques Mercier-Marcel (1826-1903) soumettent en 1868 un projet de création d’une gare marchandise reliant Saint-François à Ouchy en passant par la gare de Lausanne (ligne Jura-Simplon d’alors). Cependant, afin de construire ce qui deviendra le funiculaire Lausanne-Ouchy en 1877, il était nécessaire de creuser des tunnels entre les deux places. La terre excavée servi ainsi de remblai pour des plateformes recouvrant le Flon (c’est à ce moment là que la première rangée des arches du Grand-Pont disparaît).  
Avec le voûtage sur le Flon, sur lequel est ajouté le remblai pour créer une plateforme, c’est une nouvelle zone exploitable qui se dessine. La rivière disparaît sous terre, laissant place à des habitations et en particulier le quartier ouvrier, donnant naissance au quartier de la Pontaise.  
Dans les années 1860-1870, le sport s’implante progressivement dans l’arc lémanique, et en particulier le football. Plusieurs équipes se forment dans la ville, dont une à Baulieu et une ici, à la Pontaise. Un terrain de foot est construit sur les hauteurs, à l’extérieur de la ville, complété en 1922 par une vélodrome l’entourant et montrant de ce fait la croissance du sport.  
![][image3]  
Finalement, tout ça fut complété en 1882 par l’inauguration des nouvelles casernes dans le quartier de la Pontaise qui devient ainsi avec tous ces éléments “une localité sur laquelle il faut compter”. Le quartier s’est largement développé avec désormais plusieurs établissements publics : des cafés, un marché, etc…  
![][image4]

![][image5]  
![][image6]  
Pontaise VII 89, donc avant remblaiement/correction du Flon

## **Zone 3: Beaulieu-Chablière**

46.528954, 6.617377  
[https://www.edk.ch/fr/la-cdip/actualites/20240529](https://www.edk.ch/fr/la-cdip/actualites/20240529)  
[https://beaulieu-lausanne.com/wp-content/uploads/2019/11/24H\_1SiecleSepare2Photos\_28.08.14.pdf](https://beaulieu-lausanne.com/wp-content/uploads/2019/11/24H_1SiecleSepare2Photos_28.08.14.pdf)

Alors que jusque-là, la constitution de 1848 était en vigueur, une première esquisse de révision est proposée en 1872, mais rejetée. C’est en 1874 que la nouvelle constitution entre en vigueur. 4 principes régissant l’école primaire : 

1. l’instruction primaire doit être suffisante  
2. l’instruction primaire doit être obligatoire  
3. l’instruction primaire doit être gratuite  
4. l’instruction primaire doit être placée sous la direction de l'autorité civile

L’article en question dans la constitution fédérale de 1874 est donné ci-dessous.

**Art. 27 de la Constitution fédérale de 1874**  
«Les cantons pourvoient à l’*instruction primaire*, qui doit être *suffisante* et placée exclusivement s*ous la direction de l’autorité civile*. Elle est *obligatoire* *et, dans le*s *écoles publiques*, *gratuite*. Les écoles publiques doivent pouvoir être fréquentées par les adhérents de toutes les confessions, sans qu’ils aient à souffrir d’aucune façon dans leur liberté de conscience ou de croyance. La Confédération prendra les mesures nécessaires contre les cantons qui ne satisferaient pas à ces obligations.»

Cette nouvelle lois oblige ainsi à la construction de plusieurs écoles. En l’espace d’une dizaine d’année, de 1887 à 1898, 5 écoles sont ainsi construites dans Lausanne, chacune pouvant accueillir 500 élèves. Une de celles-ci se trouve justement à Beaulieu. Ceci fait suite en plus de cela à l’accroissement important de la population urbaine à la fin du XIXe siècle. En trente ans, la population de Lausanne a doublé (30 000 habitants en 1880, 46 000 en 1900, 64 000 en 1910).  
En parallèle à tout ça, bien que cela ne soit pas un changement majeur extraordinaire, l’accroissement de la population conduit au développement de nouveaux quartiers d’habitations. Que ce soit le doublement d’habitants qui amène à construire des écoles, ou les écoles construites qui attirent plus de gens en ville, doublant ainsi les nombre d’habitants, quoi qu’il en soit de nouveaux quartiers voient le jour. Parmis ceux-ci, le quartier de Beaulieu, autour du “centre de congrès et d’exposition de Beaulieu”, connu maintenant sous le nom de “palais de Beaulieu”, et le quartier de Chablière. Deux quartier majoritairement constitué de villas se construisent, ce qui amène à un développement majeur du réseau viaire et une densification de la ville.  
![][image7]

## **Zone 4: Axe Ouchy-Lausanne**

46.511899, 6.627952

https://notrehistoire.ch/entries/QqOYOlqGBEZ

![][image8]

La construction du funiculaire Lausanne–Ouchy débute en 1875, dans le contexte d’un fort développement touristique et économique de Lausanne. Mis en service en **1877**, il relie le bord du lac Léman à la ville haute, en passant par la gare CFF, répondant ainsi à un besoin croissant de mobilité sur un tracé à forte pente.

Ce funiculaire, affectueusement surnommé *la Ficelle* par les Lausannois en raison de son fonctionnement par câble, constitue une innovation technique notable à l’époque. Il s’agit alors d’un des premiers funiculaires de Suisse, utilisant un système hydraulique avec contrepoids d’eau. Cette infrastructure facilite non seulement les déplacements des voyageurs, mais elle contribue aussi à relier efficacement les grands axes de transport ferroviaire avec le centre-ville.

Dès ses premières années, le succès est au rendez-vous. La ligne est prolongée en **1879** jusqu’à la place du Flon, renforçant son rôle de colonne vertébrale entre les différents niveaux de la ville. L’axe devient rapidement structurant pour Lausanne, facilitant l’accès au lac pour les citadins, mais aussi l’arrivée des touristes vers les hôtels et établissements balnéaires d’Ouchy, alors en plein essor.

Durant les décennies suivantes, plusieurs modernisations techniques sont apportées à la ligne, notamment le remplacement progressif des installations hydrauliques par des systèmes plus performants. Toutefois, jusqu’à la fin des années 1920, la Ficelle conserve son statut de funiculaire, avec un charme particulier qui en fait un symbole de la mobilité lausannoise.

Ainsi, entre 1877 et 1928, le funiculaire joue un rôle clé dans la structuration urbaine et la dynamique socio-économique de Lausanne, préparant le terrain pour les transformations plus profondes qui interviendront à partir des années 1950\.

![][image9]  
*Funiculaire Lausanne-Ouchy*

*Le secteur de la Gare, lui, se densifie fortement dans les années 1950 et 1960\. Des bâtiments modernes à usage mixte (commerces, bureaux, logements) apparaissent notamment le long de l’avenue de la Gare, transformant l’entrée de ville en un espace fonctionnel et vivant. Cette zone devient un pôle multimodal, articulant les réseaux ferroviaires nationaux et le métro urbain.*  
*Au Flon, bien que la vocation industrielle et logistique reste dominante jusqu’à la fin des années 1970, la station centrale de la Ficelle contribue déjà à renforcer son rôle de carrefour. Si la transformation du quartier interviendra plus tard, les prémices d’une revalorisation apparaissent dès cette période à travers des réflexions sur l’aménagement du centre-ville.*

## 

## **Pour montrer les limites de la technique:**

## **Montbenon-Le Flon**

[https://www.lausanne.ch/portrait/carte-identite/architecture-et-monuments/patrimoine-architectural/lausanne-1900/pont-chauderon.html](https://www.lausanne.ch/portrait/carte-identite/architecture-et-monuments/patrimoine-architectural/lausanne-1900/pont-chauderon.html)

## **Ouchy-funiculaire**

[https://flon.ch/fr/a-propos-du-flon/quartier/histoire/](https://flon.ch/fr/a-propos-du-flon/quartier/histoire/)

# 1928 \- 1975:

## **Zone 1: Vidy**

46.517010, 6.603535

Entre 1928 et 1975, la zone de Vidy, à Lausanne, a connu une transformation urbaine majeure, passant d’un espace relativement périphérique à un pôle structurant de la ville, à la fois culturel, sportif et institutionnel.  
Le premier jalon de cette évolution remonte à l’inauguration du Stade de Vidy en 1923, aujourd’hui connu sous le nom de Stade Juan Antonio Samaranch. À cette époque, le site n'était encore qu'un terrain en bord de lac, mais il marquait déjà la volonté de la ville de développer le secteur autour du sport et des loisirs.  
C’est véritablement à l’approche de l’Exposition nationale suisse de 1964 (Expo64) que Vidy devient un chantier stratégique. Dans le cadre des grands travaux d’infrastructure, la ville de Lausanne entreprend d'importantes modifications. Le remblaiement du bord du lac permet de gagner environ 200 hectares sur le lac Léman, transformant le rivage naturel en esplanades, parcs et zones accessibles au public.   
![][image10]  
*Aménagement des remblais du Léman à Vidy*

Le cours du Flon est en partie comblé, remplacé par des espaces verts et des jardins, marquant une volonté d’intégration paysagère et de renaturation partielle. L’aménagement du rond-point de la Maladière en 1963 et la construction de l’autoroute A1 entre Genève et Lausanne, dont une portion traverse Vidy, intègrent définitivement le secteur dans la trame de circulation régionale.

![][image11]  
*Aménagement du giratoire de la Maladière*  
Dans le cadre de l'Expo64 elle-même, plusieurs infrastructures culturelles et ludiques voient le jour. Le Théâtre de Vidy, œuvre de l’architecte Max Bill, devient un symbole de modernité et demeure encore aujourd’hui un haut lieu de la création théâtrale. À proximité, la Vallée de la Jeunesse est aménagée pour offrir des espaces de jeux et de découverte aux enfants, tandis que l’Esplanade des Cantons accueille des pavillons représentant les différentes régions suisses, dans un esprit de cohésion nationale.

![][image12]  
*Esplanade des Cantons*

À la suite de l’Exposition, la municipalité poursuit la transformation du secteur à travers un plan d’aménagement nommé "Zone Verte de Vidy", adopté en 1966\. Ce projet vise à pérenniser les acquis de l’Expo64 tout en structurant la zone autour de la détente, du sport et de l’environnement. Dans ce cadre, le Centre sportif de Vidy est développé, culminant avec l’inauguration en 1977 du Stade Pierre de Coubertin. Ce stade original réutilise ingénieusement certaines structures de l’Expo64, notamment les anciennes caves à bières converties en vestiaires, symbolisant un recyclage architectural innovant.

Enfin, un événement de portée internationale vient ancrer définitivement Vidy sur la carte du monde sportif : en 1968, le Comité International Olympique (CIO) installe son siège dans le Château de Vidy, une élégante bâtisse au bord du lac. Ce choix renforce l’identité sportive du quartier et marque le début d’une longue présence du mouvement olympique à Lausanne, désormais surnommée "capitale olympique".

## **Zone 2: Croisette**

46.540728, 6.653669

Le développement du secteur des Croisettes ainsi que la construction de l’autoroute A9 au nord-est de Lausanne entre les années 1950 et 1975 s’inscrivent dans une phase d’urbanisation rapide du bassin lausannois, marquée par l’essor démographique, la modernisation des infrastructures et l’extension des zones urbaines vers la périphérie.

![][image13]  
*Épalinges (1957)*  
Le secteur des Croisettes, situé à l’extrémité nord-est de Lausanne, dans la commune d'Épalinges, s’est développé principalement dans les années 1960 et 1970, dans le cadre de la croissance suburbaine lausannoise: 703 habitants en 1943 à 4710 en 1976 à Epalinges. Jusque-là composé de zones agricoles et de hameaux épars, le secteur est ciblé pour un développement résidentiel et fonctionnel, favorisé par la volonté de décentraliser une partie de la population lausannoise vers des zones moins denses, tout en les maintenant connectées au centre.

Ce développement s’accompagne de la construction de logements collectifs, d’équipements scolaires, de commerces de proximité, et d’un tissu urbain structuré. Dès les années 1970, les réflexions sur un système de transport en commun performant pour la région lausannoise intègrent le besoin de desservir ces nouveaux quartiers. Le Plan directeur de la région lausannoise de 1973 évoque un axe structurant nord-sud, préfigurant le futur métro M2, même si la réalisation concrète, et la station des Croisettes, ne verront le jour qu’en 2008\.

Ce quartier devient ainsi une porte d’entrée de Lausanne depuis le nord, offrant un mélange de densité urbaine contrôlée, de cadre naturel (à la lisière de la forêt du Jorat) et de fonctions urbaines modernes.

Parallèlement, les autorités fédérales et cantonales planifient dans les années 1960 la construction de l'autoroute A9, destinée à relier Lausanne à Sion, puis à Brigue et l’Italie via le Valais. L’autoroute est pensée comme un axe est-ouest alpin majeur, complémentaire de l’A1 Genève–Zurich et permettant notamment de désengorger l'axe Lausanne-Villeneuve.

Le contournement nord-est de Lausanne, entamé dans les années 1970, s’insère dans ce projet et a un impact direct sur la région des Croisettes et d’Épalinges. Ce tronçon vise à soulager le centre-ville du trafic de transit, tout en améliorant l’accès aux quartiers périphériques et aux communes voisines (Savigny, Belmont, etc.).

L’autoroute A9 est construite dans un environnement topographiquement complexe, nécessitant de nombreux viaducs, tranchées couvertes et ouvrages d’art pour s’insérer dans le paysage sans trop l’altérer. Elle constitue un marqueur fort du paysage urbain et un levier pour le développement de quartiers comme les Croisettes, en assurant une meilleure accessibilité routière et en renforçant l’attractivité résidentielle et commerciale de ces zones.

![][image14]  
*Viaduc de Chillon sur l’autoroute A9*

## **Zone 3: Flon et Chauderon**

Initialement, le quartier du Flon était un centre industriel et logistique vital pour Lausanne. La Compagnie du chemin de fer Lausanne-Ouchy avait comblé la vallée du Flon avec les déblais des tunnels ferroviaires, créant ainsi une plateforme pour des entrepôts et une gare de marchandises dès la fin du XIXe siècle. Dans les années 1930, une convention a été signée pour réguler l’implantation et le gabarit des bâtiments, favorisant une densification du quartier. Cependant, dès les années 1950, avec le déclin du transport de marchandises par rail, ces entrepôts ont été progressivement transformés en bureaux et ateliers à bas coût, marquant une transition vers un quartier plus alternatif et créatif.  
![][image15]

La place Chauderon a subi une transformation significative au cours de cette période. Après l'installation du Crédit foncier vaudois en 1911, le quartier a vu l'arrivée de la « Nouvelle Maison du peuple » en 1936, renforçant son rôle de centre administratif et social. Dans les années 1960, des travaux majeurs ont été entrepris, notamment la construction d'un tunnel sous la place pour améliorer la circulation, ainsi que l'édification de deux bâtiments administratifs modernes entre 1970 et 1974, conçus par les architectes Roland Willomet et Paul Dumartheray avec l'aide de Jean Prouvé. Ces immeubles, caractérisés par leur façade métallique percée de hublots, ont marqué une modernisation architecturale du quartier.

![][image16]

Le réseau de transport de Lausanne a connu une réorganisation majeure durant cette période. Le réseau de tramways, qui avait atteint son extension maximale en 1933, a été progressivement démantelé, avec la fermeture de la dernière ligne en 1964\. Cette décision visait à moderniser le transport urbain, mais a entraîné une augmentation de la circulation automobile, provoquant des embouteillages et une pollution accrue. Cette situation a conduit à une prise de conscience dans les années 1970 et 1980 de la nécessité de repenser le transport public, préparant le terrain pour le développement ultérieur du métro lausannois.

# 1975 \- 2025:

## **Zone 1: Ouchy** 

coordonnée point : 46.508220, 6.633505

Entre 1975 et 2025, le quartier d’Ouchy à Lausanne a connu de nombreux changements, surtout liés au tourisme et à l’aménagement de l’espace public. Ouchy, souvent appelée la capitale olympique, est devenue un lieu important pour les loisirs, la culture et la détente. En 1984, un moment clé a marqué l’histoire du quartier : le partenariat entre Lausanne et le Comité International Olympique (CIO) pour créer le nouveau musée olympique. Ce musée a finalement été construit en 1993, renforçant le rôle d’Ouchy comme centre touristique et culturel.

De plus, dès 1989, des projets de mobilité ont aussi vu le jour, comme la demande de prolongement de la ligne de funiculaire, appelée « la Ficelle ». En 1990, un grand projet urbain a été lancé pour transformer les alentours du château d’Ouchy. L’idée était de construire un parking souterrain de 860 places afin de rendre la place de la Navigation plus agréable pour les piétons. Cette place a officiellement été aménagée en 1993\. Une carte postale ancienne de la place de la Navigation illustre d’ailleurs bien cette volonté de mettre en valeur le quartier comme vitrine touristique et lieu de promenade privilégié.

En parallèle, le bord du lac a aussi été valorisé. En 2001, les quais ont été rénovés, rendant l’espace plus accueillant pour les habitants et les touristes. Un peu plus tard dans les années 2020 de nouvelles zones de baignade ont été ouvertes offrant de nouveaux espaces pour se détendre au bord du lac.

Finalement, l’accessibilité au bord du lac connaît une grande modification en 2008\. Le métro M2 remplace l’ancienne « Ficelle ». Ce métro automatique, qui monte jusqu’à Epalinges, facilite les déplacements et relie mieux le sud et le nord de la ville. Ouchy devient alors un point de départ important pour se déplacer dans tout Lausanne, surtout avec la présence du port, qui permet aussi de voyager en bateau sur le lac.

## **Zone 2 : Praz-séchaud (entre la Sallaz et les Croisette)**

coordonnée point : 46.538414, 6.666182

À Praz-Séchaud, il n’y a pas eu de grand événement marquant qui a tout changé d’un coup. Le quartier s’est plutôt développé petit à petit, grâce à l’espace disponible et à l’arrivée de nouvelles infrastructures.

En 2008, le métro M2 est mis en service. Trois nouveaux arrêts sont alors créés dans la région : Fourmi, Vennes et Croisettes, ce qui facilite les déplacements vers le centre-ville et rend le quartier plus accessible en transports publics. De plus, en 2012, un centre sportif a été construit, avec des terrains de foot, de tennis, et d’autres équipements, ce qui permet également aux jeunes des quartiers voisins de pratiquer une activité sportive régulièrement.

En 2017, l’ouverture d’Aquatis, le plus grand aquarium d’eau douce d’Europe, tout proche de Praz-Séchaud, a aussi joué un rôle dans le développement local. Même si l’impact n’a pas été immédiat, cela a permis de faire connaître la région.

La proximité avec la sortie d’autoroute de Lausanne-Vennes a également aidé au développement urbain. Aujourd’hui, Praz-Séchaud continue d’évoluer en tant que quartier résidentiel bien desservi, calme, et avec des équipements sportifs pour les habitants.

## 

## **Zone 3: Bosson**

coordonnée point : 46.536917, 6.618516

Le quartier des Bossons a connu plusieurs développements importants à partir des années 2000, principalement axés sur le sport, les loisirs et les infrastructures. Ces dernières années, plusieurs piscines ont été aménagées dans les environs, ce qui favorise les activités familiales et offre aux enfants du quartier plus de possibilités pour se divertir et se développer.

En 2002, le Centre Sport-Études Lausanne a été créé, offrant aux jeunes sportifs un environnement propice à la fois à la performance et à la scolarité. Cette initiative a renforcé l'attractivité du quartier pour les familles et les sportifs.

En 2017, les travaux ont débuté pour la construction du Stade de la Tuilière, un projet majeur pour la ville. Ce stade, d'une capacité de 12'000 places, a été inauguré en novembre 2020\. Il est destiné à accueillir les matchs du FC Lausanne-Sport et d'autres événements sportifs et culturels.

Parallèlement, le Centre sportif de la Tuilière a ouvert ses portes en 2018\. Ce complexe moderne comprend neuf terrains de football, des vestiaires, une buvette et des locaux pour les clubs, servant ainsi de pôle central pour le football amateur lausannois.

![][image17]