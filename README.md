# RGPD Token API & Frontend

## Objectif
Ce projet propose une architecture simple et modulaire pour gérer l’authentification par token JWT, avec un backend Node.js/Express et un frontend React. Il respecte les bonnes pratiques de développement (modularité, sécurité, séparation des responsabilités).

---

## 1. Backend : `rgpd-token-api`

### Installation
```sh
cd rgpd-token-api
npm install
```

### Lancement
- **Développement** :
  ```sh
  npm run dev
  ```
- **Production** :
  ```sh
  npm start
  ```

### Structure
- `src/index.js` : Point d’entrée, configuration Express, routes.
- `src/routes/auth.routes.js` : Définition des routes d’authentification.
- `src/controllers/auth.controller.js` : Logique métier (login, accès protégé).
- `src/middleware/verifyToken.js` : Middleware de vérification du token JWT.
- `src/utils/jwt.js` : Fonctions utilitaires pour signer et vérifier les tokens.
- `.env` : Clé secrète JWT (`JWT_SECRET=your_secret_key`).

### Fonctionnement
- **/api/auth/login** : Génère un token JWT à partir de l’email fourni.
- **/api/auth/protected** : Route protégée, accessible uniquement avec un token valide dans l’en-tête `Authorization`.

### Sécurité
- Clé secrète stockée dans `.env`.
- Token limité dans le temps (`expiresIn`).
- Middleware pour vérifier la validité du token.

---

## 2. Frontend : `frontend-rgpd`

### Installation
```sh
cd frontend-rgpd
npm install
```

### Lancement
```sh
npm start
```

### Fonctionnalités
- Saisie de l’email utilisateur et login.
- Récupération et affichage du token JWT.
- Accès à une route protégée avec le token.
- Bannière RGPD de consentement aux cookies (`CookieBanner`).

### Fichiers principaux
- `src/App.js` : Interface principale, gestion du login, token, accès protégé.
- `src/CookieBanner.js` : Composant de consentement RGPD.
- `src/index.js` : Point d’entrée React.

---

## 3. Bonnes pratiques
- Code modulaire et lisible.
- Séparation claire des responsabilités.
- Utilisation de variables d’environnement.
- Respect des principes de sécurité (jamais de clé secrète côté client, token limité dans le temps, validation des entrées).

---

## 4. SAST/DAST (optionnel)
- **SAST** : Utilisez `npm audit`, Snyk ou SonarQube pour analyser le code source.
- **DAST** : Utilisez OWASP ZAP pour tester l’application en fonctionnement.

---

## 5. Exemple de test rapide (sans frontend)

### 1. Connexion (récupérer un token)
```sh
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email": "test@example.com"}'
```

### 2. Accès protégé
```sh
curl http://localhost:3000/api/auth/protected \
-H "Authorization: Bearer VOTRE_TOKEN_ICI"
```

---

## 6. Auteurs
- Réalisé dans le cadre du projet IPSSI

---

Pour toute question ou amélioration, ouvrez une issue ou contactez l’équipe projet.
