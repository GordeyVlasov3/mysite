import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <>
      {/* Герой секция */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Мы готовы ответить на все ваши вопросы и помочь с выбором памятника
          </p>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-800">Наши контакты</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                  <i className="fas fa-map-marker-alt mr-3 text-amber-600"></i>
                  Адрес
                </h3>
                <p className="text-lg text-gray-600">
                  Апрелевская улица, 65, Апрелевка, Наро-Фоминский городской округ, Московская область, 143362
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                  <i className="fas fa-phone-alt mr-3 text-amber-600"></i>
                  Телефоны
                </h3>
                <p className="text-lg text-gray-600 mb-2">+7 (980) 536-84-49</p>
                <p className="text-lg text-gray-600">+7 (916) 990-44-91</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                  <i className="fas fa-envelope mr-3 text-amber-600"></i>
                  Email
                </h3>
                <p className="text-lg text-gray-600">info@granit-master.ru</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                  <i className="fas fa-clock mr-3 text-amber-600"></i>
                  Режим работы
                </h3>
                <p className="text-lg text-gray-600 mb-2">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-lg text-gray-600">Сб: 10:00 - 15:00</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-800">Напишите нам</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                    placeholder="ivan@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-300"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full text-lg"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Карта */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Как нас найти</h2>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.249393964839!2d37.065623!3d55.538275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aadf1e2e2e2e3%3A0x0!2zNTXCsDMyJzE4LjgiTiAzN8KwMDQnMDQuMSJF!5e0!3m2!1sru!2sru!4v1718031111111!5m2!1sru!2sru"
              width="100%"
              height="450"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Почему стоит обратиться к нам</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-amber-600 text-4xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Индивидуальный подход</h3>
              <p className="text-gray-600">Каждый проект уникален, мы учитываем все ваши пожелания</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-amber-600 text-4xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
              <p className="text-gray-600">25 лет гарантии на все наши изделия</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-amber-600 text-4xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">С пониманием</h3>
              <p className="text-gray-600">Мы понимаем важность этого момента и относимся с уважением</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
