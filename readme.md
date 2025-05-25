# Old Roads

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