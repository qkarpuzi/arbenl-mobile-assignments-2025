# 🧩 Project Topics (IDs 01–60)

> Medium difficulty, suitable for Flutter / React Native / Kotlin.  
> Suggested Supabase tables are indicated for each topic.

## Productivity & Utilities
01. Task Manager with AI summaries (Supabase: tasks{id, title, is_done, owner_id}) — (Available)
02. Habit Tracker + Streaks + Reminders (Supabase: habits{id, name, streak, user_id}) — (Available)
03. Smart Notes with AI tagging & search (Supabase: notes{id, title, body, tags[], user_id}) — (Available)
04. Personal Finance Tracker with budgets (Supabase: transactions{id, amount, category, user_id}) — (Available)
05. Pomodoro Timer + Focus Stats (Supabase: sessions{id, start_at, length, user_id}) — (Available)
06. Document Scanner + OCR + AI summaries (Storage + docs{id, url, summary, user_id}) — (Available)
07. Multi-language Translator Phrasebook (phrases{id, lang_src, lang_dst, text, user_id}) — (Available)
08. Goal Planner + AI milestone generator (goals{id, title, milestones[], user_id}) — (Available)
09. Timezone World Clock + Meeting Helper (meetings{id, title, tz, user_id}) — (Available)
10. Smart Calendar with AI agenda (events{id, title, dt, notes, user_id}) — (Available)

## Health & Wellness
11. Water Intake Tracker + Notifications (hydration{dt, amount, user_id}) — (Available)
12. Step Counter + Goals + Badges (steps{dt, count, user_id}) — (Available)
13. Sleep Log + AI Sleep Hygiene tips (sleep{dt, hours, quality, user_id}) — (Available)
14. Mood Journal + Sentiment with AI (moods{dt, note, sentiment, user_id}) — (Available)
15. Simple Workout Planner + History (workouts{id, name, plan[], user_id}) — (Available)
16. Healthy Recipes + AI nutrition facts (recipes{id, title, tags[], user_id}) — (Available)
17. Medication Reminder + Stock check (meds{id, name, schedule[], user_id}) — (Available)
18. Guided Breathing + HR estimate (sessions{id, pattern, user_id}) — (Available)
19. Period Tracker + Insights (cycles{dt, note, user_id}) — (Available)
20. Posture Coach (timers + tips) (posture{dt, duration, user_id}) — (Available)

## Learning & Careers
21. Flashcards with spaced repetition (cards{id, front, back, box, user_id}) — (Available)
22. AI Essay Outline Generator (outlines{id, topic, bullets[], user_id}) — (Available)
23. Interview Prep (Q/A bank + AI hints) (qa{id, question, answer, user_id}) — (Available)
24. CV Builder + Skill Gap Advisor (profiles{id, name, skills[], user_id}) — (Available)
25. Language Learning Drills (lessons{id, prompt, score, user_id}) — (Available)
26. Code Snippet Vault + Explainer AI (snippets{id, code, tags[], user_id}) — (Available)
27. Public Speaking Coach (notes{id, script, tips[], user_id}) — (Available)
28. Study Planner + AI weekly plan (plans{id, week, items[], user_id}) — (Available)
29. Portfolio Tracker (projects{id, title, url, user_id}) — (Available)
30. Quiz Builder + Results (quizzes{id, items[], score, user_id}) — (Available)

## Social & Community
31. Campus Events (map + RSVP) (events{id, title, place, dt, user_id}) — (Available)
32. Book Club (reading list + reviews) (books{id, title, note, user_id}) — (Available)
33. Volunteer Finder + Hours Log (volunteer{id, org, hours, user_id}) — (Available)
34. Local Marketplace (listings + chat) (listings{id, title, price, seller_id}) — (Available)
35. Study Buddy Match (profiles{id, major, time, user_id}) — (Available)
36. Pet Adoption Browser + Faves (pets{id, name, breed, status, user_id}) — (Available)
37. Sports Pickup Games (create/join) (games{id, sport, place, dt, created_by}) — (Available)
38. Mentorship Matching (mentors{id, skill, slots}, mentees{id, goal}) — (Available)
39. Time-banking (skills exchange) (offers{id, skill, unit, user_id}) — (Available)
40. Lost & Found Campus (items{id, desc, pic, status}) — (Available)

## Travel & Logistics
41. Bus/Train Schedule + Alerts (routes{id, name}, trips{dt, route_id}) — (Available)
42. Packing List + Weather Hints (items{id, name, qty, trip_id}) — (Available)
43. City Guide + Offline cache (places{id, name, cat, note}) — (Available)
44. Expense Splitter for trips (splits{id, amt, who[], trip_id}) — (Available)
45. Parking Finder + Favorites (spots{id, address, rating, user_id}) — (Available)
46. Fuel Log + Consumption stats (fuel{dt, liters, km, user_id}) — (Available)
47. Commute Optimizer (history + tips) (commutes{dt, mode, time, user_id}) — (Available)
48. Travel Journal + AI captions (photos{id, url, caption}) — (Available)
49. EV Charge Planner (stations + notes) (stations{id, name, kw, fav}) — (Available)
50. Bike Route Logger + POIs (rides{dt, km, note, user_id}) — (Available)

## Media & Creativity
51. Podcast Queue + Notes (episodes{id, title, note, user_id}) — (Available)
52. Photo Journal + AI tags (photos{id, url, tags[], user_id}) — (Available)
53. Music Practice Log + Tempo (practice{dt, minutes, piece, user_id}) — (Available)
54. Recipe Book + Shopping List (recipes{id, title}, ingredients{id, qty}) — (Available)
55. Movie Watchlist + Ratings (movies{id, title, rating, user_id}) — (Available)
56. Reading Tracker + Quotes (reads{id, book, page, quote, user_id}) — (Available)
57. Idea Board + AI brainstorm (ideas{id, note, tags[], user_id}) — (Available)
58. Daily Journal + Mood AI (journal{dt, text, mood, user_id}) — (Available)
59. Design System Tokens (colors, spacing) (tokens{key, value, user_id}) — (Available)
60. Meme Generator + Templates (memes{id, src, top, bottom, user_id}) — (Available)
