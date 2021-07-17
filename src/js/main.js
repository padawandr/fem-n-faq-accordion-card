const faqButtons = document.querySelectorAll('.faq__button')

faqButtons.forEach(button => {
	button.addEventListener('click', () => {
		const btnChildren = [...button.children]; // htmlcollection to array
		const answer = button.nextElementSibling;

		btnChildren.forEach(btnChild => {
			btnChild.classList.toggle('active')
		})

		answer.classList.toggle('active')
	})
})
