import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      {/* Герой секция */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">О нашей компании</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            18 лет создаем памятники, которые становятся вечной памятью о близких
          </p>
        </div>
      </section>

      {/* О компании */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/monument1.svg" 
                alt="Наша мастерская" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Наша история</h2>
              <p className="text-lg text-gray-600 mb-6">
                Компания "Гранит Мастер" была основана в 2005 году как небольшая семейная мастерская по изготовлению памятников. Начиная с нескольких человек, сегодня мы выросли в крупное предприятие с собственным производством и штатом профессиональных мастеров.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                За годы работы мы установили более 15 000 памятников по всей России, став надежным партнером для тысяч семей в трудный момент их жизни.
              </p>
              <Link to="/contact" className="btn-secondary inline-flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Наши преимущества */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 text-center">
              <div className="text-amber-600 text-5xl mb-6">
                <i className="fas fa-gem"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Качественные материалы</h3>
              <p className="text-gray-600 text-lg">
                Работаем только с проверенными месторождениями гранита в России и за рубежом
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 text-center">
              <div className="text-amber-600 text-5xl mb-6">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Опытные мастера</h3>
              <p className="text-gray-600 text-lg">
                Наши специалисты имеют стаж работы от 10 лет в камнерезном деле
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 text-center">
              <div className="text-amber-600 text-5xl mb-6">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Современное оборудование</h3>
              <p className="text-gray-600 text-lg">
                Используем итальянские станки с ЧПУ для точной обработки камня
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-amber-400 mb-4">15 000+</div>
              <div className="text-xl">Установленных памятников</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-amber-400 mb-4">18</div>
              <div className="text-xl">Лет опыта работы</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-amber-400 mb-4">25</div>
              <div className="text-xl">Лет гарантии</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-amber-400 mb-4">100%</div>
              <div className="text-xl">Качество материалов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Консультация</h3>
              <p className="text-gray-600">Обсуждаем ваши пожелания и подбираем оптимальный вариант</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Проектирование</h3>
              <p className="text-gray-600">Создаем индивидуальный дизайн по вашим требованиям</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Изготовление</h3>
              <p className="text-gray-600">Производим памятник с использованием современного оборудования</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Установка</h3>
              <p className="text-gray-600">Доставляем и профессионально устанавливаем памятник</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
