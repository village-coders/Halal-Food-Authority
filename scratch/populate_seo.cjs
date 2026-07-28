const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/locales');

const frSeo = {
  "siteTitle": "Halal Food Authority",
  "siteDescription": "Organisme officiel de certification Halal - Normes et certification Halal mondiales",
  "defaultKeywords": "halal, certification, nourriture halal, musulman, normes halal, HFA",
  "breadcrumb": {
    "home": "Accueil",
    "about": "À propos",
    "certification": "Certification",
    "procedure": "Procédure",
    "termination": "Résiliation",
    "fee-policy": "Politique Tarifaire",
    "complaints-committee": "Comité des Réclamations",
    "provisions-for-the-use-of-hfa-logo": "Utilisation du Logo HFA",
    "hfa-impartiality-policy": "Politique d'Impartialité",
    "hfa-quality-policy": "Politique Qualité",
    "hfa-corporate-and-financial-governance": "Gouvernance d'Entreprise",
    "hfa-complaints-appeals-procedure": "Réclamations & Appels",
    "halal-food-sampling-analysis-policy": "Échantillonnage des Aliments",
    "faqs": "FAQ",
    "contact": "Contact",
    "events": "Événements",
    "hfa-planning-2025": "Planification HFA 2025",
    "hfa-webinar-2020": "Webinaire 2020",
    "ulemah-meeting-jan-2019": "Réunion des Oulémas 2019",
    "hhic2019": "HHIC 2019",
    "hhic2018": "HHIC 2018",
    "hhic2017": "HHIC 2017",
    "hhic2016": "HHIC 2016",
    "hhic2015": "HHIC 2015",
    "muslimlife2016": "Muslim Expo 2016",
    "find-more-halal-food-authourity": "En savoir plus",
    "food-and-beverages": "Aliments & Boissons",
    "cosmetics": "Cosmétiques",
    "pharmaceuticals": "Produits Pharmaceutiques",
    "ingredients": "Ingrédients",
    "additives-aromas": "Additifs & Arômes",
    "packaging-materials": "Matériaux d'Emballage",
    "uk-parliament-debate-on-banning-non-stun-slaughter-on-9th-may-hfa-perspective": "Débat au Parlement Britannique",
    "our-clients": "Nos Clients",
    "exporting-your-products-to-indonesia": "Exporter vers l'Indonésie",
    "our-events": "Événements"
  },
  "home": {
    "title": "Accueil",
    "description": "Halal Food Authority - Premier organisme de certification Halal garantissant les normes mondiales",
    "keywords": "certification halal, halal food authority, normes halal mondiales"
  },
  "about": {
    "title": "À propos de nous",
    "description": "Découvrez la mission, la vision, l'histoire et le leadership mondial de Halal Food Authority",
    "keywords": "à propos de HFA, mission halal, histoire de la certification, HFA à propos"
  },
  "certificationProcedure": {
    "title": "Procédure de certification Halal",
    "description": "Guide étape par étape pour obtenir la certification Halal Food Authority pour vos produits",
    "keywords": "processus de certification halal, demander un certificat halal, étapes de certification"
  },
  "terminationProcedure": {
    "title": "Procédure de résiliation de la certification",
    "description": "Comprendre le processus de résiliation et de suspension de la certification Halal Food Authority",
    "keywords": "résiliation de certification, fin de certificat halal, suspension de certification"
  },
  "feePolicy": {
    "title": "Politique tarifaire de la HFA",
    "description": "Structure tarifaire complète et politique de paiement pour les services de certification HFA",
    "keywords": "tarifs certification halal, prix HFA, coûts de certification"
  },
  "complaintsCommittee": {
    "title": "Comité des réclamations",
    "description": "Processus et procédures du comité de réclamations de la Halal Food Authority",
    "keywords": "réclamations halal, plaintes HFA, litige de certification"
  },
  "hfaLogoProvisions": {
    "title": "Dispositions pour l'utilisation du logo HFA",
    "description": "Directives pour l'utilisation du logo de la Halal Food Authority sur les produits certifiés",
    "keywords": "utilisation logo HFA, directives logo halal, utilisation logo certifié"
  },
  "impartialityPolicy": {
    "title": "Politique d'impartialité de la HFA",
    "description": "Engagement de la Halal Food Authority à l'impartialité dans les processus de certification",
    "keywords": "politique d'impartialité, certification impartiale, certification halal équitable"
  },
  "qualityPolicy": {
    "title": "Politique qualité de la HFA",
    "description": "Assurance qualité et politique de normes pour la certification de la Halal Food Authority",
    "keywords": "politique qualité, normes qualité halal, qualité de certification"
  },
  "corporateGovernance": {
    "title": "Gouvernance d'entreprise et financière de la HFA",
    "description": "Gouvernance d'entreprise et politiques financières de la Halal Food Authority",
    "keywords": "gouvernance d'entreprise, politique financière, gestion HFA"
  },
  "complaintsAppeals": {
    "title": "Procédure de réclamations et d'appels",
    "description": "Procédure officielle pour déposer des réclamations et des appels auprès de la HFA",
    "keywords": "procédure de réclamation, processus d'appel, plaintes HFA"
  },
  "foodSampling": {
    "title": "Politique d'échantillonnage et d'analyse des aliments",
    "description": "Politique d'échantillonnage et d'analyse des produits alimentaires pour la certification halal",
    "keywords": "échantillonnage alimentaire, analyse halal, politique de test de produit"
  },
  "faq": {
    "title": "Foire aux questions",
    "description": "Trouvez des réponses aux questions courantes sur la Halal Food Authority et la certification halal",
    "keywords": "FAQ halal, questions de certification, foire aux questions HFA"
  },
  "contact": {
    "title": "Contactez-nous",
    "description": "Contactez Halal Food Authority pour toute demande de certification, support ou information",
    "keywords": "contact HFA, demande de certification halal, nous contacter"
  },
  "eventPlanning2025": {
    "title": "Planification d'événements HFA 2025",
    "description": "Événements à venir et calendrier de planification de la Halal Food Authority pour 2025",
    "keywords": "événements HFA 2025, événements halal, conférences à venir"
  },
  "webinar2020": {
    "title": "Webinaire HFA 2020",
    "description": "Enregistrements et informations de la série de webinaires 2020 de la Halal Food Authority",
    "keywords": "webinaire HFA, séminaire halal en ligne, enregistrements webinaire 2020"
  },
  "ulemahMeeting2019": {
    "title": "Réunion des Oulémas - Janvier 2019",
    "description": "Points forts et résultats de la réunion des Oulémas de la HFA en janvier 2019",
    "keywords": "réunion des oulémas, conférence des savants halal, réunion de janvier 2019"
  },
  "hhic2019": {
    "title": "HHIC 2019 - Conférence Internationale sur l'Alimentation Halal",
    "description": "Couverture complète de la Conférence internationale sur l'alimentation halal 2019 organisée par la HFA",
    "keywords": "HHIC 2019, conférence internationale halal, événement halal mondial"
  },
  "hhic2018": {
    "title": "HHIC 2018 - Conférence Internationale sur l'Alimentation Halal",
    "description": "Points forts de la Conférence internationale sur l'alimentation halal 2018",
    "keywords": "HHIC 2018, conférence halal, événement international halal"
  },
  "hhic2017": {
    "title": "HHIC 2017 - Conférence Internationale sur l'Alimentation Halal",
    "description": "Récapitulatif de la Conférence internationale sur l'alimentation halal 2017",
    "keywords": "HHIC 2017, conférence sur l'alimentation halal, sommet halal mondial"
  },
  "hhic2016": {
    "title": "HHIC 2016 - Conférence Internationale sur l'Alimentation Halal",
    "description": "Couverture de la Conférence internationale sur l'alimentation halal 2016",
    "keywords": "HHIC 2016, conférence internationale halal, sommet de la nourriture halal"
  },
  "hhic2015": {
    "title": "HHIC 2015 - Conférence Internationale sur l'Alimentation Halal",
    "description": "Première conférence internationale sur l'alimentation halal 2015 organisée par la HFA",
    "keywords": "HHIC 2015, conférence halal inaugurale, première conférence HFA"
  },
  "muslimExpo": {
    "title": "Muslim Lifestyle Expo 2016",
    "description": "Participation de la Halal Food Authority au Muslim Lifestyle Expo 2016 à Londres Olympia",
    "keywords": "Muslim Lifestyle Expo 2016, événement halal de Londres, exposition HFA, MLE 2016"
  },
  "findMore": {
    "title": "En savoir plus sur la Halal Food Authority",
    "description": "Ressources et informations supplémentaires sur les services de la HFA",
    "keywords": "plus sur la HFA, ressources supplémentaires, informations halal"
  },
  "foodBeverages": {
    "title": "Certification Halal pour les Aliments et Boissons",
    "description": "Services de certification halal pour les produits alimentaires et les boissons par la HFA",
    "keywords": "certification alimentaire halal, boissons halal, certification produits alimentaires"
  },
  "cosmetics": {
    "title": "Certification Halal pour les Cosmétiques",
    "description": "Certification halal pour les produits cosmétiques par la Halal Food Authority",
    "keywords": "cosmétiques halal, certification cosmétique, produits de beauté halal"
  },
  "pharmaceuticals": {
    "title": "Certification Halal pour les Produits Pharmaceutiques",
    "description": "Services de certification halal pour les produits pharmaceutiques par la HFA",
    "keywords": "produits pharmaceutiques halal, certification médicaments, produits médicaux halal"
  },
  "ingredients": {
    "title": "Certification Halal pour les Ingrédients",
    "description": "Certification halal pour les ingrédients alimentaires et de produits par la HFA",
    "keywords": "ingrédients halal, certification matières premières, ingrédient halal"
  },
  "additivesAromas": {
    "title": "Certification Halal pour les Additifs et Arômes",
    "description": "Certification halal pour les additifs alimentaires et les arômes par la HFA",
    "keywords": "additifs halal, certification arômes, additifs alimentaires halal"
  },
  "packaging": {
    "title": "Certification Halal pour les Matériaux d'Emballage",
    "description": "Certification halal pour les matériaux d'emballage par la Halal Food Authority",
    "keywords": "emballage halal, certification emballage, emballage alimentaire halal"
  },
  "ukParliamentDebate": {
    "title": "Débat au Parlement Britannique sur l'Abattage sans Étourdissement",
    "description": "Perspective de la HFA sur le débat au Parlement britannique concernant l'interdiction de l'abattage sans étourdissement",
    "keywords": "débat parlement britannique, abattage sans étourdissement, débat abattage halal"
  },
  "ourClients": {
    "title": "Nos Clients",
    "description": "Liste des entreprises et organisations certifiées par la Halal Food Authority",
    "keywords": "clients HFA, entreprises certifiées, entreprises certifiées halal"
  },
  "exportIndonesia": {
    "title": "Exporter vos produits vers l'Indonésie",
    "description": "Guide pour l'exportation de produits certifiés halal vers l'Indonésie avec la certification HFA",
    "keywords": "exportation Indonésie, export halal, certification marché indonésien"
  },
  "eventsList": {
    "title": "Nos Événements",
    "description": "Liste complète des événements, conférences et séminaires organisés par la HFA",
    "keywords": "événements HFA, conférences halal, séminaires à venir"
  }
};

const deSeo = {
  "siteTitle": "Halal Food Authority",
  "siteDescription": "Offizielle Halal Food Authority - Weltweite Halal-Zertifizierung und -Standards",
  "defaultKeywords": "halal, zertifizierung, halal-lebensmittel, muslim, halal-standards, HFA",
  "breadcrumb": {
    "home": "Startseite",
    "about": "Über uns",
    "certification": "Zertifizierung",
    "procedure": "Verfahren",
    "termination": "Beendigung",
    "fee-policy": "Gebührenrichtlinie",
    "complaints-committee": "Beschwerdeausschuss",
    "provisions-for-the-use-of-hfa-logo": "Nutzung des HFA-Logos",
    "hfa-impartiality-policy": "Unparteilichkeitsrichtlinie",
    "hfa-quality-policy": "Qualitätsrichtlinie",
    "hfa-corporate-and-financial-governance": "Unternehmensführung",
    "hfa-complaints-appeals-procedure": "Beschwerden & Einsprüche",
    "halal-food-sampling-analysis-policy": "Lebensmittelprobenahme",
    "faqs": "FAQs",
    "contact": "Kontakt",
    "events": "Veranstaltungen",
    "hfa-planning-2025": "HFA-Planung 2025",
    "hfa-webinar-2020": "Webinar 2020",
    "ulemah-meeting-jan-2019": "Ulemah-Treffen 2019",
    "hhic2019": "HHIC 2019",
    "hhic2018": "HHIC 2018",
    "hhic2017": "HHIC 2017",
    "hhic2016": "HHIC 2016",
    "hhic2015": "HHIC 2015",
    "muslimlife2016": "Muslim Expo 2016",
    "find-more-halal-food-authourity": "Mehr erfahren",
    "food-and-beverages": "Lebensmittel & Getränke",
    "cosmetics": "Kosmetik",
    "pharmaceuticals": "Arzneimittel",
    "ingredients": "Inhaltsstoffe",
    "additives-aromas": "Zusatzstoffe & Aromen",
    "packaging-materials": "Verpackungsmaterialien",
    "uk-parliament-debate-on-banning-non-stun-slaughter-on-9th-may-hfa-perspective": "Debatte im britischen Parlament",
    "our-clients": "Unsere Kunden",
    "exporting-your-products-to-indonesia": "Export nach Indonesien",
    "our-events": "Veranstaltungen"
  },
  "home": {
    "title": "Startseite",
    "description": "Halal Food Authority - Führende Halal-Zertifizierungsstelle zur Gewährleistung globaler Standards",
    "keywords": "halal-zertifizierung, halal food authority, weltweite halal-standards"
  },
  "about": {
    "title": "Über uns",
    "description": "Erfahren Sie mehr über die Mission, Vision, Geschichte und globale Führungsrolle der Halal Food Authority",
    "keywords": "über HFA, unsere mission, geschichte der halal-zertifizierung, HFA über uns"
  },
  "certificationProcedure": {
    "title": "Halal-Zertifizierungsverfahren",
    "description": "Schritt-für-Schritt-Anleitung zur Erlangung der Halal-Food-Authority-Zertifizierung für Ihre Produkte",
    "keywords": "halal-zertifizierungsprozess, halal-zertifikat beantragen, zertifizierungsschritte"
  },
  "terminationProcedure": {
    "title": "Verfahren zur Beendigung der Zertifizierung",
    "description": "Informationen zum Beendigungs- und Aussetzungsverfahren für HFA-Zertifizierungen",
    "keywords": "zertifizierungsbeendigung, halal-zertifikat kündigen, zertifizierung stoppen"
  },
  "feePolicy": {
    "title": "HFA Gebührenrichtlinie",
    "description": "Vollständige Gebührenstruktur und Zahlungsrichtlinien für HFA-Zertifizierungsdienste",
    "keywords": "halal-zertifizierungsgebühren, HFA preise, zertifizierungskosten"
  },
  "complaintsCommittee": {
    "title": "Beschwerdeausschuss",
    "description": "Verfahren und Prozesse des Beschwerdeausschusses der Halal Food Authority",
    "keywords": "halal beschwerden, HFA beschwerden, zertifizierungsbeschwerden"
  },
  "hfaLogoProvisions": {
    "title": "Bestimmungen für die Verwendung des HFA-Logos",
    "description": "Richtlinien für die Verwendung des Halal-Food-Authority-Logos auf zertifizierten Produkten",
    "keywords": "HFA logo-nutzung, halal-logo-richtlinien, verwendung zertifiziertes logo"
  },
  "impartialityPolicy": {
    "title": "HFA Unparteilichkeitsrichtlinie",
    "description": "Die Verpflichtung der Halal Food Authority zur Unparteilichkeit bei Zertifizierungsprozessen",
    "keywords": "unparteilichkeitsrichtlinie, unvoreingenommene zertifizierung, faire halal-zertifizierung"
  },
  "qualityPolicy": {
    "title": "HFA Qualitätsrichtlinie",
    "description": "Qualitätssicherungs- und Standardrichtlinie für die HFA-Zertifizierung",
    "keywords": "qualitätsrichtlinie, halal-qualitätsstandards, zertifizierungsqualität"
  },
  "corporateGovernance": {
    "title": "HFA Unternehmens- und Finanzführung",
    "description": "Corporate Governance und Finanzrichtlinien der Halal Food Authority",
    "keywords": "corporate governance, finanzrichtlinie, HFA verwaltung"
  },
  "complaintsAppeals": {
    "title": "Beschwerde- und Einspruchsverfahren",
    "description": "Offizielles Verfahren zur Einreichung von Beschwerden und Einsprüchen bei der HFA",
    "keywords": "beschwerdeverfahren, einspruchsverfahren, HFA beschwerden"
  },
  "foodSampling": {
    "title": "Halal-Lebensmittelprobenahme- und Analyserichtlinie",
    "description": "Richtlinie zur Probenahme und Analyse von Lebensmitteln für die Halal-Zertifizierung",
    "keywords": "lebensmittelprobenahme, halal-analyse, richtlinie für produkttests"
  },
  "faq": {
    "title": "Häufig gestellte Fragen (FAQs)",
    "description": "Antworten auf häufige Fragen zur Halal Food Authority und Halal-Zertifizierung",
    "keywords": "halal FAQ, fragen zur zertifizierung, HFA häufig gestellte fragen"
  },
  "contact": {
    "title": "Kontaktieren Sie uns",
    "description": "Kontaktieren Sie die Halal Food Authority für Zertifizierungsanfragen, Support und Informationen",
    "keywords": "kontakt HFA, halal-zertifizierungsanfrage, kontakt aufnehmen"
  },
  "eventPlanning2025": {
    "title": "HFA Veranstaltungsplanung 2025",
    "description": "Bevorstehende Veranstaltungen und Planungskalender der Halal Food Authority für 2025",
    "keywords": "HFA veranstaltungen 2025, halal veranstaltungen, bevorstehende konferenzen"
  },
  "webinar2020": {
    "title": "HFA Webinar 2020",
    "description": "Aufzeichnungen und Informationen der HFA-Webinarreihe aus dem Jahr 2020",
    "keywords": "HFA webinar, online-halal-seminar, webinar-aufzeichnungen 2020"
  },
  "ulemahMeeting2019": {
    "title": "Ulemah-Treffen Januar 2019",
    "description": "Highlights und Ergebnisse des Ulemah-Treffens der HFA im Januar 2019",
    "keywords": "ulemah-treffen, halal-gelehrtenkonferenz, treffen januar 2019"
  },
  "hhic2019": {
    "title": "HHIC 2019 - Internationale Halal-Lebensmittelkonferenz",
    "description": "Vollständige Berichterstattung über die von der HFA organisierte HHIC 2019",
    "keywords": "HHIC 2019, internationale halal-konferenz, globales halal-event"
  },
  "hhic2018": {
    "title": "HHIC 2018 - Internationale Halal-Lebensmittelkonferenz",
    "description": "Highlights der HHIC 2018 von der Halal Food Authority",
    "keywords": "HHIC 2018, halal-konferenz, internationales halal-event"
  },
  "hhic2017": {
    "title": "HHIC 2017 - Internationale Halal-Lebensmittelkonferenz",
    "description": "Rückblick auf die von der HFA organisierte HHIC 2017",
    "keywords": "HHIC 2017, halal-lebensmittelkonferenz, globaler halal-gipfel"
  },
  "hhic2016": {
    "title": "HHIC 2016 - Internationale Halal-Lebensmittelkonferenz",
    "description": "Berichterstattung über die HHIC 2016 der Halal Food Authority",
    "keywords": "HHIC 2016, internationale halal-konferenz, halal-lebensmittel-gipfel"
  },
  "hhic2015": {
    "title": "HHIC 2015 - Internationale Halal-Lebensmittelkonferenz",
    "description": "Erste von der HFA organisierte HHIC im Jahr 2015",
    "keywords": "HHIC 2015, eröffnende halal-konferenz, erste HFA-konferenz"
  },
  "muslimExpo": {
    "title": "Muslim Lifestyle Expo 2016",
    "description": "Teilnahme der Halal Food Authority an der Muslim Lifestyle Expo 2016 in London Olympia",
    "keywords": "Muslim Lifestyle Expo 2016, Londoner halal-event, HFA ausstellung, MLE 2016"
  },
  "findMore": {
    "title": "Mehr über die Halal Food Authority erfahren",
    "description": "Zusätzliche Ressourcen und Informationen zu HFA-Diensten",
    "keywords": "mehr über HFA, zusätzliche ressourcen, halal-behörde info"
  },
  "foodBeverages": {
    "title": "Halal-Zertifizierung für Lebensmittel & Getränke",
    "description": "Halal-Zertifizierungsdienste der HFA für Lebensmittel- und Getränkeprodukte",
    "keywords": "halal-lebensmittelzertifizierung, getränke halal, zertifizierung von lebensmitteln"
  },
  "cosmetics": {
    "title": "Halal-Zertifizierung für Kosmetika",
    "description": "Halal-Zertifizierung für Kosmetikprodukte durch die Halal Food Authority",
    "keywords": "halal-kosmetik, kosmetikzertifizierung, halal-beautyprodukte"
  },
  "pharmaceuticals": {
    "title": "Halal-Zertifizierung für Arzneimittel",
    "description": "Halal-Zertifizierungsdienste der HFA für pharmazeutische Produkte",
    "keywords": "halal-arzneimittel, medikamentenzertifizierung, pharmazeutika halal"
  },
  "ingredients": {
    "title": "Halal-Zertifizierung für Inhaltsstoffe",
    "description": "Halal-Zertifizierung der HFA für Lebensmittel- und Produktinhaltsstoffe",
    "keywords": "halal-inhaltsstoffe, zertifizierung von rohstoffen, inhaltsstoff halal"
  },
  "additivesAromas": {
    "title": "Halal-Zertifizierung für Zusatzstoffe & Aromen",
    "description": "Halal-Zertifizierung der HFA für Lebensmittelzusatzstoffe und Aromen",
    "keywords": "halal-zusatzstoffe, aromenzertifizierung, lebensmittelzusatzstoffe halal"
  },
  "packaging": {
    "title": "Halal-Zertifizierung für Verpackungsmaterialien",
    "description": "Halal-Zertifizierung für Verpackungsmaterialien durch die HFA",
    "keywords": "halal-verpackung, verpackungszertifizierung, lebensmittelverpackung halal"
  },
  "ukParliamentDebate": {
    "title": "Debatte im britischen Parlament über Betäubungslose Schlachtung",
    "description": "HFA-Perspektive auf die Debatte im britischen Parlament über das Verbot betäubungsloser Schlachtung",
    "keywords": "britische parlamentsdebatte, betäubungslose schlachtung, halal-schlachtungsdebatte"
  },
  "ourClients": {
    "title": "Unsere Kunden",
    "description": "Liste der von der Halal Food Authority zertifizierten Unternehmen",
    "keywords": "HFA kunden, zertifizierte unternehmen, halal-zertifizierte betriebe"
  },
  "exportIndonesia": {
    "title": "Export Ihrer Produkte nach Indonesien",
    "description": "Leitfaden für den Export halal-zertifizierter Produkte nach Indonesien mit HFA-Zertifikat",
    "keywords": "export nach indonesien, halal-export, zertifizierung indonesischer markt"
  },
  "eventsList": {
    "title": "Unsere Veranstaltungen",
    "description": "Vollständige Liste der von der HFA organisierten Veranstaltungen, Konferenzen und Seminare",
    "keywords": "HFA veranstaltungen, halal-konferenzen, bevorstehende seminare"
  }
};

const esSeo = {
  "siteTitle": "Halal Food Authority",
  "siteDescription": "Organismo oficial de Halal Food Authority - Certificación y normas Halal globales",
  "defaultKeywords": "halal, certificación, alimentos halal, musulmán, normas halal, HFA",
  "breadcrumb": {
    "home": "Inicio",
    "about": "Sobre nosotros",
    "certification": "Certificación",
    "procedure": "Procedimiento",
    "termination": "Terminación",
    "fee-policy": "Política de Tarifas",
    "complaints-committee": "Comité de Quejas",
    "provisions-for-the-use-of-hfa-logo": "Uso de Logotipo HFA",
    "hfa-impartiality-policy": "Política de Imparcialidad",
    "hfa-quality-policy": "Política de Calidad",
    "hfa-corporate-and-financial-governance": "Gobierno Corporativo",
    "hfa-complaints-appeals-procedure": "Quejas y Apelaciones",
    "halal-food-sampling-analysis-policy": "Muestreo de Alimentos",
    "faqs": "FAQs",
    "contact": "Contacto",
    "events": "Eventos",
    "hfa-planning-2025": "Planificación HFA 2025",
    "hfa-webinar-2020": "Webinar 2020",
    "ulemah-meeting-jan-2019": "Reunión de Ulemah 2019",
    "hhic2019": "HHIC 2019",
    "hhic2018": "HHIC 2018",
    "hhic2017": "HHIC 2017",
    "hhic2016": "HHIC 2016",
    "hhic2015": "HHIC 2015",
    "muslimlife2016": "Muslim Expo 2016",
    "find-more-halal-food-authourity": "Saber más",
    "food-and-beverages": "Alimentos y Bebidas",
    "cosmetics": "Cosméticos",
    "pharmaceuticals": "Productos Farmacéuticos",
    "ingredients": "Ingredientes",
    "additives-aromas": "Aditivos y Aromas",
    "packaging-materials": "Materiales de Embalaje",
    "uk-parliament-debate-on-banning-non-stun-slaughter-on-9th-may-hfa-perspective": "Debate del Parlamento Británico",
    "our-clients": "Nuestros Clientes",
    "exporting-your-products-to-indonesia": "Exportar a Indonesia",
    "our-events": "Eventos"
  },
  "home": {
    "title": "Inicio",
    "description": "Halal Food Authority - Organismo líder en certificación halal que garantiza normas globales",
    "keywords": "certificación halal, halal food authority, normas halal mundiales"
  },
  "about": {
    "title": "Sobre nosotros",
    "description": "Conozca la misión, visión, historia y liderazgo global en certificación de Halal Food Authority",
    "keywords": "sobre HFA, nuestra misión, historia de certificación halal, HFA sobre nosotros"
  },
  "certificationProcedure": {
    "title": "Procedimiento de certificación Halal",
    "description": "Guía paso a paso para obtener la certificación de Halal Food Authority para sus productos",
    "keywords": "proceso de certificación halal, solicitar certificado halal, pasos de certificación"
  },
  "terminationProcedure": {
    "title": "Procedimiento de terminación de certificación",
    "description": "Comprensión del proceso de terminación y suspensión de la certificación de HFA",
    "keywords": "terminación de certificación, cancelar certificado halal, detener certificación"
  },
  "feePolicy": {
    "title": "Política de tarifas de HFA",
    "description": "Estructura de tarifas completa y política de pago para los servicios de certificación de HFA",
    "keywords": "tarifas de certificación halal, precios HFA, costos de certificación"
  },
  "complaintsCommittee": {
    "title": "Comité de Quejas",
    "description": "Procesos y procedimientos del comité de quejas de Halal Food Authority",
    "keywords": "quejas halal, quejas HFA, quejas de certificación"
  },
  "hfaLogoProvisions": {
    "title": "Disposiciones para el uso del logotipo HFA",
    "description": "Pautas para el uso del logotipo de Halal Food Authority en productos certificados",
    "keywords": "uso de logotipo HFA, pautas de logotipo halal, uso de logotipo certificado"
  },
  "impartialityPolicy": {
    "title": "Política de imparcialidad de HFA",
    "description": "El compromiso de Halal Food Authority con la imparcialidad en los procesos de certificación",
    "keywords": "política de imparcialidad, certificación imparcial, certificación halal justa"
  },
  "qualityPolicy": {
    "title": "Política de calidad de HFA",
    "description": "Garantía de calidad y política de normas para la certificación de Halal Food Authority",
    "keywords": "política de calidad, normas de calidad halal, calidad de certificación"
  },
  "corporateGovernance": {
    "title": "Gobierno corporativo y financiero de HFA",
    "description": "Gobierno corporativo y políticas financieras de Halal Food Authority",
    "keywords": "gobierno corporativo, política financiera, gestión HFA"
  },
  "complaintsAppeals": {
    "title": "Procedimiento de quejas y apelaciones",
    "description": "Procedimiento oficial para presentar quejas y apelaciones ante HFA",
    "keywords": "procedimiento de quejas, proceso de apelación, quejas HFA"
  },
  "foodSampling": {
    "title": "Política de muestreo y análisis de alimentos halal",
    "description": "Política de muestreo y análisis de alimentos para la certificación halal",
    "keywords": "muestreo de alimentos, análisis halal, política de pruebas de productos"
  },
  "faq": {
    "title": "Preguntas frecuentes (FAQs)",
    "description": "Encuentre respuestas a preguntas comunes sobre Halal Food Authority y la certificación halal",
    "keywords": "FAQ halal, preguntas de certificación, preguntas frecuentes HFA"
  },
  "contact": {
    "title": "Contáctenos",
    "description": "Contacte a Halal Food Authority para consultas de certificación, soporte e información",
    "keywords": "contacto HFA, consulta de certificación halal, ponerse en contacto"
  },
  "eventPlanning2025": {
    "title": "Planificación de eventos HFA 2025",
    "description": "Próximos eventos y calendario de planificación de Halal Food Authority para 2025",
    "keywords": "eventos HFA 2025, eventos halal, próximas conferencias"
  },
  "webinar2020": {
    "title": "Webinar HFA 2020",
    "description": "Grabaciones e información de la serie de seminarios web de HFA del año 2020",
    "keywords": "seminario web HFA, seminario halal en línea, grabaciones de seminarios 2020"
  },
  "ulemahMeeting2019": {
    "title": "Reunión de Ulemah - Enero de 2019",
    "description": "Aspectos destacados y resultados de la reunión de Ulemah de HFA en enero de 2019",
    "keywords": "reunión de ulemah, conferencia de eruditos halal, reunión de enero 2019"
  },
  "hhic2019": {
    "title": "HHIC 2019 - Conferencia Internacional de Alimentos Halal",
    "description": "Cobertura completa de la Conferencia Internacional de Alimentos Halal 2019 organizada por HFA",
    "keywords": "HHIC 2019, conferencia internacional halal, evento halal global"
  },
  "hhic2018": {
    "title": "HHIC 2018 - Conferencia Internacional de Alimentos Halal",
    "description": "Aspectos destacados de la Conferencia Internacional de Alimentos Halal 2018 de HFA",
    "keywords": "HHIC 2018, conferencia halal, evento internacional halal"
  },
  "hhic2017": {
    "title": "HHIC 2017 - Conferencia Internacional de Alimentos Halal",
    "description": "Resumen de la Conferencia Internacional de Alimentos Halal 2017 organizada por HFA",
    "keywords": "HHIC 2017, conferencia de alimentos halal, cumbre halal mundial"
  },
  "hhic2016": {
    "title": "HHIC 2016 - Conferencia Internacional de Alimentos Halal",
    "description": "Cobertura de la Conferencia Internacional de Alimentos Halal 2016 de HFA",
    "keywords": "HHIC 2016, conferencia internacional halal, cumbre de alimentos halal"
  },
  "hhic2015": {
    "title": "HHIC 2015 - Conferencia Internacional de Alimentos Halal",
    "description": "Primera Conferencia Internacional de Alimentos Halal organizada por HFA en 2015",
    "keywords": "HHIC 2015, conferencia halal inaugural, primera conferencia HFA"
  },
  "muslimExpo": {
    "title": "Muslim Lifestyle Expo 2016",
    "description": "Participación de Halal Food Authority en el Muslim Lifestyle Expo 2016 en London Olympia",
    "keywords": "Muslim Lifestyle Expo 2016, evento halal en Londres, exposición HFA, MLE 2016"
  },
  "findMore": {
    "title": "Saber más sobre Halal Food Authority",
    "description": "Recursos e información adicionales sobre los servicios de HFA",
    "keywords": "más sobre HFA, recursos adicionales, información de autoridad halal"
  },
  "foodBeverages": {
    "title": "Certificación Halal para Alimentos y Bebidas",
    "description": "Servicios de certificación halal para alimentos y bebidas por HFA",
    "keywords": "certificación halal de alimentos, bebidas halal, certificación de productos alimenticios"
  },
  "cosmetics": {
    "title": "Certificación Halal para Cosméticos",
    "description": "Certificación halal para productos cosméticos por Halal Food Authority",
    "keywords": "cosméticos halal, certificación cosmética, productos de belleza halal"
  },
  "pharmaceuticals": {
    "title": "Certificación Halal para Productos Farmacéuticos",
    "description": "Servicios de certificación halal para productos farmacéuticos por HFA",
    "keywords": "productos farmacéuticos halal, certificación de medicamentos, farmacia halal"
  },
  "ingredients": {
    "title": "Certificación Halal para Ingredientes",
    "description": "Certificación halal para ingredientes de alimentos y productos por HFA",
    "keywords": "ingredientes halal, certificación de materias primas, ingrediente halal"
  },
  "additivesAromas": {
    "title": "Certificación Halal para Aditivos y Aromas",
    "description": "Certificación halal para aditivos alimentarios y aromas por HFA",
    "keywords": "aditivos halal, certificación de aromas, aditivos alimentarios halal"
  },
  "packaging": {
    "title": "Certificación Halal para Materiales de Embalaje",
    "description": "Certificación halal para materiales de embalaje por Halal Food Authority",
    "keywords": "embalaje halal, certificación de embalajes, envases alimentarios halal"
  },
  "ukParliamentDebate": {
    "title": "Debate del Parlamento Británico sobre el Sacrificio sin Aturdimiento",
    "description": "Perspectiva de HFA sobre el debate del Parlamento británico acerca de la prohibición del sacrificio sin aturdimiento",
    "keywords": "debate parlamento británico, sacrificio sin aturdimiento, debate sacrificio halal"
  },
  "ourClients": {
    "title": "Nuestros Clientes",
    "description": "Lista de empresas y organizaciones certificadas por Halal Food Authority",
    "keywords": "clientes HFA, empresas certificadas, empresas con certificación halal"
  },
  "exportIndonesia": {
    "title": "Exportar sus productos a Indonesia",
    "description": "Guía para exportar productos con certificación halal a Indonesia con certificado HFA",
    "keywords": "exportar a Indonesia, exportación halal, certificación del mercado de Indonesia"
  },
  "eventsList": {
    "title": "Nuestros Eventos",
    "description": "Lista completa de eventos, con conferencias y seminarios organizados por Halal Food Authority",
    "keywords": "eventos HFA, conferencias halal, seminarios próximos"
  }
};

const itSeo = {
  "siteTitle": "Halal Food Authority",
  "siteDescription": "Organismo ufficiale di Halal Food Authority - Standard e certificazione Halal globali",
  "defaultKeywords": "halal, certificazione, alimenti halal, musulmano, standard halal, HFA",
  "breadcrumb": {
    "home": "Home",
    "about": "Chi siamo",
    "certification": "Certificazione",
    "procedure": "Procedura",
    "termination": "Terminazione",
    "fee-policy": "Politica Tariffaria",
    "complaints-committee": "Comitato Reclami",
    "provisions-for-the-use-of-hfa-logo": "Uso del Logo HFA",
    "hfa-impartiality-policy": "Politica di Imparzialità",
    "hfa-quality-policy": "Politica di Qualità",
    "hfa-corporate-and-financial-governance": "Corporate Governance",
    "hfa-complaints-appeals-procedure": "Reclami & Ricorsi",
    "halal-food-sampling-analysis-policy": "Campionamento Alimenti",
    "faqs": "FAQs",
    "contact": "Contatto",
    "events": "Eventi",
    "hfa-planning-2025": "Pianificazione HFA 2025",
    "hfa-webinar-2020": "Webinar 2020",
    "ulemah-meeting-jan-2019": "Incontro Ulemah 2019",
    "hhic2019": "HHIC 2019",
    "hhic2018": "HHIC 2018",
    "hhic2017": "HHIC 2017",
    "hhic2016": "HHIC 2016",
    "hhic2015": "HHIC 2015",
    "muslimlife2016": "Muslim Expo 2016",
    "find-more-halal-food-authourity": "Scopri di più",
    "food-and-beverages": "Alimenti e Bevande",
    "cosmetics": "Cosmetici",
    "pharmaceuticals": "Prodotti Farmaceutici",
    "ingredients": "Ingredienti",
    "additives-aromas": "Additivi e Aromi",
    "packaging-materials": "Materiali di Imballaggio",
    "uk-parliament-debate-on-banning-non-stun-slaughter-on-9th-may-hfa-perspective": "Dibattito al Parlamento Britannico",
    "our-clients": "I nostri Clienti",
    "exporting-your-products-to-indonesia": "Esportare in Indonesia",
    "our-events": "Eventi"
  },
  "home": {
    "title": "Home",
    "description": "Halal Food Authority - Organismo leader di certificazione halal che garantisce standard globali",
    "keywords": "certificazione halal, halal food authority, standard halal globali"
  },
  "about": {
    "title": "Chi siamo",
    "description": "Scopri la missione, la visione, la storia e la leadership globale di Halal Food Authority",
    "keywords": "informazioni su HFA, la nostra missione, storia della certificazione halal, HFA chi siamo"
  },
  "certificationProcedure": {
    "title": "Procedura di certificazione Halal",
    "description": "Guida passo-passo per ottenere la certificazione Halal Food Authority per i tuoi prodotti",
    "keywords": "processo di certificazione halal, richiedere certificato halal, fasi di certificazione"
  },
  "terminationProcedure": {
    "title": "Procedura di terminazione della certificazione",
    "description": "Informazioni sulla procedura di terminazione e sospensione della certificazione HFA",
    "keywords": "terminazione certificazione, cancellare certificato halal, interrompere certificazione"
  },
  "feePolicy": {
    "title": "Politica tariffaria HFA",
    "description": "Struttura tariffaria completa e politica di pagamento per i servizi di certificazione HFA",
    "keywords": "tariffe certificazione halal, prezzi HFA, costi di certificazione"
  },
  "complaintsCommittee": {
    "title": "Comitato Reclami",
    "description": "Processo e procedure del comitato reclami di Halal Food Authority",
    "keywords": "reclami halal, reclami HFA, controversie certificazione"
  },
  "hfaLogoProvisions": {
    "title": "Disposizioni per l'uso del logo HFA",
    "description": "Linee guida per l'utilizzo del logo Halal Food Authority sui prodotti certificati",
    "keywords": "uso logo HFA, linee guida logo halal, uso logo certificato"
  },
  "impartialityPolicy": {
    "title": "Politica di imparzialità HFA",
    "description": "L'impegno di Halal Food Authority per l'imparzialità nei processi di certificazione",
    "keywords": "politica di imparzialità, certificazione imparziale, certificazione halal equa"
  },
  "qualityPolicy": {
    "title": "Politica di qualità HFA",
    "description": "Garanzia di qualità e politica degli standard per la certificazione Halal Food Authority",
    "keywords": "politica di qualità, standard di qualità halal, qualità certificazione"
  },
  "corporateGovernance": {
    "title": "Governance aziendale e finanziaria HFA",
    "description": "Corporate governance e politiche finanziarie di Halal Food Authority",
    "keywords": "corporate governance, politica finanziaria, gestione HFA"
  },
  "complaintsAppeals": {
    "title": "Procedura di reclamo e ricorso",
    "description": "Procedura ufficiale per presentare reclami e ricorsi presso HFA",
    "keywords": "procedura di reclamo, processo di ricorso, reclami HFA"
  },
  "foodSampling": {
    "title": "Politica di campionamento e analisi degli alimenti halal",
    "description": "Politica per il campionamento e l'analisi dei prodotti alimentari per la certificazione halal",
    "keywords": "campionamento alimenti, analisi halal, politica di test del prodotto"
  },
  "faq": {
    "title": "Domande frequenti (FAQs)",
    "description": "Risposte alle domande più comuni su Halal Food Authority e sulla certificazione halal",
    "keywords": "FAQ halal, domande certificazione, domande frequenti HFA"
  },
  "contact": {
    "title": "Contattaci",
    "description": "Contatta Halal Food Authority per richieste di certificazione, supporto e informazioni",
    "keywords": "contatti HFA, richiesta certificazione halal, mettiti in contatto"
  },
  "eventPlanning2025": {
    "title": "Pianificazione eventi HFA 2025",
    "description": "Prossimi eventi e calendario di pianificazione di Halal Food Authority per il 2025",
    "keywords": "eventi HFA 2025, eventi halal, prossime conferenze"
  },
  "webinar2020": {
    "title": "Webinar HFA 2020",
    "description": "Registrazioni e informazioni della serie di webinar del 2020 di Halal Food Authority",
    "keywords": "webinar HFA, seminario halal online, registrazioni webinar 2020"
  },
  "ulemahMeeting2019": {
    "title": "Incontro Ulemah - Gennaio 2019",
    "description": "Punti salienti e risultati dell'incontro Ulemah di HFA a gennaio 2019",
    "keywords": "incontro ulemah, conferenza studiosi halal, incontro gennaio 2019"
  },
  "hhic2019": {
    "title": "HHIC 2019 - Conferenza Internazionale sul Cibo Halal",
    "description": "Copertura completa della Conferenza internazionale sul cibo halal 2019 organizzata da HFA",
    "keywords": "HHIC 2019, conferenza internazionale halal, evento halal globale"
  },
  "hhic2018": {
    "title": "HHIC 2018 - Conferenza Internazionale sul Cibo Halal",
    "description": "Punti salienti della Conferenza internazionale sul cibo halal 2018 di HFA",
    "keywords": "HHIC 2018, conferenza halal, evento internazionale halal"
  },
  "hhic2017": {
    "title": "HHIC 2017 - Conferenza Internazionale sul Cibo Halal",
    "description": "Riepilogo della Conferenza internazionale sul cibo halal 2017 organizzata da HFA",
    "keywords": "HHIC 2017, conferenza cibo halal, vertice halal mondiale"
  },
  "hhic2016": {
    "title": "HHIC 2016 - Conferenza Internazionale sul Cibo Halal",
    "description": "Copertura della Conferenza internazionale sul cibo halal 2016 di HFA",
    "keywords": "HHIC 2016, conferenza internazionale halal, summit cibo halal"
  },
  "hhic2015": {
    "title": "HHIC 2015 - Conferenza Internazionale sul Cibo Halal",
    "description": "Prima conferenza internazionale sul cibo halal organizzata da HFA nel 2015",
    "keywords": "HHIC 2015, conferenza halal inaugurale, prima conferenza HFA"
  },
  "muslimExpo": {
    "title": "Muslim Lifestyle Expo 2016",
    "description": "Partecipazione di Halal Food Authority al Muslim Lifestyle Expo 2016 presso London Olympia",
    "keywords": "Muslim Lifestyle Expo 2016, evento halal a Londra, esposizione HFA, MLE 2016"
  },
  "findMore": {
    "title": "Scopri di più su Halal Food Authority",
    "description": "Risorse e informazioni aggiuntive sui servizi di HFA",
    "keywords": "più su HFA, risorse aggiuntive, informazioni autorità halal"
  },
  "foodBeverages": {
    "title": "Certificazione Halal per Alimenti e Bevande",
    "description": "Servizi di certificazione halal per alimenti e bevande da parte di HFA",
    "keywords": "certificazione halal alimenti, bevande halal, certificazione prodotti alimentari"
  },
  "cosmetics": {
    "title": "Certificazione Halal per i Cosmetici",
    "description": "Certificazione halal per prodotti cosmetici da parte di Halal Food Authority",
    "keywords": "cosmetici halal, certificazione cosmetica, prodotti di bellezza halal"
  },
  "pharmaceuticals": {
    "title": "Certificazione Halal per i Prodotti Farmaceutici",
    "description": "Servizi di certificazione halal per prodotti pharma da parte di HFA",
    "keywords": "prodotti farmaceutici halal, certificazione farmaci, prodotti medici halal"
  },
  "ingredients": {
    "title": "Certificazione Halal per gli Ingredienti",
    "description": "Certificazione halal per ingredienti di alimenti e prodotti da parte di HFA",
    "keywords": "ingredienti halal, certificazione materie prime, ingrediente halal"
  },
  "additivesAromas": {
    "title": "Certificazione Halal per Additivi e Aromi",
    "description": "Certificazione halal per additivi alimentari e aromi da parte di HFA",
    "keywords": "additivi halal, certificazione aromi, additivi alimentari halal"
  },
  "packaging": {
    "title": "Certificazione Halal per Materiali di Imballaggio",
    "description": "Certificazione halal per materiali di imballaggio da parte di Halal Food Authority",
    "keywords": "imballaggio halal, certificazione imballaggi, imballaggi alimentari halal"
  },
  "ukParliamentDebate": {
    "title": "Dibattito al Parlamento Britannico sulla Macellazione senza Stordimento",
    "description": "Prospettiva HFA sul dibattito al Parlamento britannico sul divieto di macellazione senza stordimento",
    "keywords": "dibattito parlamento britannico, macellazione senza stordimento, dibattito macellazione halal"
  },
  "ourClients": {
    "title": "I nostri Clienti",
    "description": "Elenco delle aziende e organizzazioni certificate da Halal Food Authority",
    "keywords": "clienti HFA, aziende certificate, aziende con certificazione halal"
  },
  "exportIndonesia": {
    "title": "Esportare i tuoi prodotti in Indonesia",
    "description": "Guida all'esportazione di prodotti certificati halal in Indonesia con certificazione HFA",
    "keywords": "esportazione in Indonesia, export halal, certificazione mercato indonesiano"
  },
  "eventsList": {
    "title": "I Nostri Eventi",
    "description": "Elenco completo di eventi, conferenze e seminari organizzati da Halal Food Authority",
    "keywords": "eventi HFA, conferenze halal, seminari futuri"
  }
};

const mappings = {
  'fr.json': frSeo,
  'de.json': deSeo,
  'es.json': esSeo,
  'it.json': itSeo
};

for (const [filename, seoObj] of Object.entries(mappings)) {
  const filePath = path.join(localesDir, filename);
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    
    // Create new object with "seo" prepended to keep clean sorting/layout
    const updated = {
      "seo": seoObj,
      ...data
    };
    
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf8');
    console.log(`Successfully added 'seo' to ${filename}`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
  }
}
