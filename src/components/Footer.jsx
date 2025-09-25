import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <i className="fas fa-mountain text-3xl text-amber-400 mr-3"></i>
              Гранит Мастер
            </h3>
            <p className="text-gray-400 text-lg">
              Изготовление памятников из гранита с 2005 года. Качество, проверенное временем.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-400 hover:text-white transition duration-300">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-vk text-3xl"></i>
              </a>
              <a href="https://t.me/granit_master77" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-telegram text-3xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">+7 (980) 536-84-49</li>
              <li className="text-gray-400">+7 (916) 990-44-91</li>
              <li className="text-gray-400">info@granit-master.ru</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2023 Гранит Мастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
