---
title: "Audio Searcher — Content-Based MIDI & Image Retrieval"
context: "ITB IF2123 Linear Algebra & Geometry Course Project"
description: "A content-based information retrieval web application built to search, extract acoustic pitch features, and match MIDI audio and image files using cosine similarity metrics."
problem: "Traditional text search cannot find unlabelled or misnamed audio files based on musical content. Querying audio requires extracting mathematical feature fingerprints directly from the music structure."
solution: "Parsed MIDI message streams using mido to generate pitch histogram feature vectors across temporal windows; evaluated candidate similarity against an indexed database using cosine vector similarity in Flask."
stack: ["Python", "Flask", "mido (MIDI Parser)", "Pitch Histograms", "Cosine Similarity", "NumPy"]
link: "https://github.com/Starath/Algeo02_23078"
order: 3
---
