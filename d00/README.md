TDD

Test Driven Development

Ecrire des tests avant le code

1 - RED -> Ecrire un test qui fail
2 - GREEN -> On fait passer le test SIMPLEMENT
3 - REFACTOR -> On clean
4 -> 1

Aller plus vite -> Moins de couts
    - essentiel
    - On fait de la feature, pas du debug

-- Client pas interessé -- 
Long time support
Eviter les regressions
Comprehension du code
Assurer le refacto

Assurance
Aller a l'essentiel
Rigueur
Fluidifie le dev
Plus simple de recuperer du code existant
Ligne directrice
Les tests documentent le code

Tests-After:
    - Adapter ton test a ta fonctionnalité
    - Parait optionnel
    - Gagne pas de temps
    - Possibilite de code non testable

Tests-First:
    - Oublie la partie Driven

Differents types de tests:
    - Unitaires -> Un bout de code independamment des dependances 
    - Integration -> On verifie l'integration d'un outil
    - End 2 End -> Parcours complet (cas critiques)
    - Golden -> Snapshot
