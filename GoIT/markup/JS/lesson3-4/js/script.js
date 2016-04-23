var app = {
	createElement: function(params) {
		var element = document.createElement(params.tagName);

		if (params.inputType) {
			element.setAttribute('type', params.inputType);
		}

		if (params.className) {
			element.className = params.className;
		}

		if (params.content) {
			element.innerHTML = params.content;
		}

		if (params.parentElement) {
			params.parentElement.appendChild(element);
		}

		return element;
	},
	generateQuestions: function(questionsAmount, answersAmount) {
		for (var i = 0; i < questionsAmount; i++) {
			this.createElement({
				tagName: 'h3',
				content: [i + 1] + '. ' + 'Вопрос №' + (i + 1),
				parentElement: form
			});
			for (var j = 0; j < answersAmount; j++) {
				var label = this.createElement({
					tagName: 'label',
					className: 'test2',
					content: 'Вариант ответа №' + (j + 1),
					parentElement: form
				});

				var checkbox = this.createElement({
					tagName:'input',
					inputType: 'checkbox'
				});

				label.insertAdjacentElement('afterBegin', checkbox);
			}
		};
	}
}



var body = document.querySelector('body');


app.createElement({
	tagName: 'h2',
	content: 'Тест по программированию',
	parentElement: body
});

document.querySelector('h2').style.textAlign = 'center';

var form = app.createElement({
	tagName: 'form',
	parentElement: body
});

document.querySelector('form').style.textIndent = '30%';
// document.querySelector('form').style.fontSize = '18px';

app.generateQuestions(3, 3);

app.createElement({
	tagName: 'button',
	// inputType: 'submit',
	className: 'btn btn-lg btn-success pos',
	content: 'Проверить мои результаты',
	parentElement: body
});

document.querySelector('button').style.fontSize = '18px';
