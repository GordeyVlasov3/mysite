import { useState } from 'react'

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Памятник "Классика"',
      description: 'Традиционный памятник из карельского гранита с полированной лицевой стороной',
      price: '25 000',
      category: 'monuments',
      image: 'https://images.unsplash.com/photo-1603105037880-8802c0a72bc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Крест гранитный',
      description: 'Православный крест из темного гранита с возможностью нанесения гравировки',
      price: '18 000',
      category: 'crosses',
      image: 'https://images.unsplash.com/photo-1603105037880-8802c0a72bc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Оградка "Престиж"',
      description: 'Комплект ограждения из гранита с коваными элементами и цоколем',
      price: '35 000',
      category: 'fences',
      image: 'https://images.unsplash.com/photo-1603105037880-8802c0a72bc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Стелла "Элегант"',
      description: 'Современная стелла из гранита с возможностью размещения фотографии',
      price: '22 000',
      category: 'monuments',
      image: 'https://images.unsplash.com/photo-1603105037880-8802c0a72bc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      name: 'Цветник "Классик"',
      description: 'Гранитный цветник для посадки цветов и растений',
      price: '8 000',
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1603105037880-8802c0a72bc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      name: 'Лавочка "Уют"',
      description: 'Гранитная лавочка для отдыха у могилы',
      price: '12 000',
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1603105037880-8802c0a72bc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'monuments', name: 'Памятники' },
    { id: 'crosses', name: 'Кресты' },
    { id: 'fences', name: 'Оградки' },
    { id: 'accessories', name: 'Аксессуары' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <>
      {/* Герой секция */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Каталог гранитных изделий</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Широкий выбор памятников, крестов, оградок и аксессуаров из натурального гранита
          </p>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Каталог товаров */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="card">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-800">от {product.price} ₽</span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition duration-300">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Товары в выбранной категории не найдены</p>
            </div>
          )}
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-amber-600 text-4xl mb-4">
                <i className="fas fa-gem"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Качественные материалы</h3>
              <p className="text-gray-600">Работаем только с проверенными месторождениями гранита</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-amber-600 text-4xl mb-4">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Современное оборудование</h3>
              <p className="text-gray-600">Используем итальянские станки с ЧПУ для точной обработки</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-amber-600 text-4xl mb-4">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">25 лет гарантии</h3>
              <p className="text-gray-600">Наши изделия сохраняют первоначальный вид десятилетиями</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Catalog
