// Vanilla Javascript

(() => {

  // когда будет введено 3 символа в поле name то будет разблокированна кнопка
  const nameInput = document.querySelector("#name-input")
  nameInput.addEventListener('input',(e)=>{
    if(nameInput.value.length >=3 ){
      btnSubmitProfile.removeAttribute("disabled")
      btnSubmitProfile.classList.remove("btn-submit--disable")
    }else{
      btnSubmitProfile.setAttribute("disabled", "true")
      btnSubmitProfile.classList.add("btn-submit--disable")
    }
  })

	var input = document.querySelector('#phone-number');
  // номер телефона
	var vit= window.intlTelInput(input, {
		loadUtils: () => import('/script/plugins/utils.js'),
		utilsScript: './plugins/utils.js',
		// страны которые будут показываться
		onlyCountries: [
			'al',
			'ad',
			'at',
			'by',
			'be',
			'ba',
			'bg',
			'hr',
			'cz',
			'dk',
			'ee',
			'fo',
			'fi',
			'fr',
			'de',
			'gi',
			'gr',
			'va',
			'hu',
			'is',
			'ie',
			'it',
			'lv',
			'li',
			'lt',
			'lu',
			'mk',
			'mt',
			'md',
			'mc',
			'me',
			'nl',
			'no',
			'pl',
			'pt',
			'ro',
			'ru',
			'sm',
			'rs',
			'sk',
			'si',
			'es',
			'se',
			'ch',
			'ua',
			'gb',
		],
		// options here
		allowDropdown: true,
		autoFormat: true,
		autoPlaceholder: 'aggressive', // пример телефона
		countrySearch: false, // отключаем поиск
		strictMode: true, // только цифры
		useFullscreenPopup: false, // не попап
		separateDialCode: true, // код телевфо
	});

	// наблюдатель за выбором страны
	const observer = new MutationObserver(entries => {
		//  когда выбираем страну то добовляем класс selected-country-choosed
		document
			.querySelector('.iti__selected-country')
			.classList.add('selected-country-choosed');
    // функция цстанавливает максимальное кол-во допустимых символов для ввода
    maxLength()
	});

	const parent = document.querySelector('.iti__selected-dial-code');

	observer.observe(parent, {
		subtree: true, // для всех дочерних элементов
		childList: true, // наблюдение за дочерними элементами
		attributes: true, // наблюдение за изменениями атрибутов
		characterData: true, // наблюдать ли за текстовое содержимое
	});


  // функция цстанавливает максимальное кол-во допустимых символов для ввода
  function maxLength(){
    // значения из placeholder
    let placeholder = input.getAttribute("placeholder")
    // устанавливаем атрибут для длины
    input.setAttribute("maxlength",`${placeholder.length}`)
    
  }
  // отправка формы
  var btnSubmitProfile = document.querySelector(".profile-info__submit") // кнопка отправить
  btnSubmitProfile.addEventListener("click", (e)=>{
    e.preventDefault()

    // введеный номер телефона
    let number = vit.getNumber()
    console.log(number);
    
  })

  // показать - скрыть пароль
  document.querySelectorAll('.password-show').forEach(el => {
    el.addEventListener('click', () => {
      let input = el.previousElementSibling; // input на который нажали
      if (input.type === 'password') {
        input.type = 'text';
        el.classList.contains('_hide') && el.classList.remove('_hide');
        el.classList.add('_show');
      } else {
        input.type = 'password';
        el.classList.contains('_show') && el.classList.remove('_show');
        el.classList.add('_hide');
      }
    });
  });

})();
