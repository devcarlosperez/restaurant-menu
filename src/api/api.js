export async function getAllMeals(URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
  const response = await fetch(URL)
  if (!response.ok) {
    throw new Error("Error fetching meals")
  }
  const data = await response.json()
  const meals = data.meals || []
  return meals.map(normalizeMeal)
}

export async function getMealById(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`)
  if (!res.ok) throw new Error('Error fetching meal detail')
  const data = await res.json()
  const meal = (data.meals && data.meals[0]) || null
  return meal ? normalizeMeal(meal) : null
}

export async function getMealsByCategory(category) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`)
  if (!res.ok) throw new Error('Error fetching category meals')
  const data = await res.json()
  const meals = data.meals || []
  return meals.map(m => ({
    id: m.idMeal,
    name: m.strMeal,
    category,
    thumb: m.strMealThumb,
    price: randomPrice(),
  }))
}

function normalizeMeal(m) {
  return {
    id: m.idMeal,
    name: m.strMeal,
    category: m.strCategory || 'General',
    thumb: m.strMealThumb,
    price: randomPrice(),
    instructions: m.strInstructions || '',
    area: m.strArea || '',
    tags: m.strTags ? m.strTags.split(',').map(t => t.trim()) : [],
    ingredients: extractIngredients(m),
  }
}

function extractIngredients(m) {
  const items = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = (m[`strIngredient${i}`] || '').trim()
    const measure = (m[`strMeasure${i}`] || '').trim()
    if (ingredient) items.push({ ingredient, measure })
  }
  return items
}

function randomPrice() {
  return Number((Math.random() * 17 + 8).toFixed(2))
}