
		const container = document.getElementById('container');
		const pageNumberElement = document.getElementById('page-number');
		const issueListElement = document.getElementById('issue-list');
		const loadPrevButton = document.getElementById('load_prev');
		const loadNextButton = document.getElementById('load_next');
	
		let pageNumber = 1;
	
		function fetchIssues(pageNumber) {
		  const url = `https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`;
		  fetch(url)
			.then(response => response.json())
			.then(data => {
			  // Clear the existing issues from the list
			  issueListElement.innerHTML = '';
			  // Loop through the array of issues and add them to the list
			  data.forEach(issue => {
				const issueElement = document.createElement('li');
				issueElement.textContent = issue.title;
				issueListElement.appendChild(issueElement);
			  });
			  // Update the page number heading
			  pageNumberElement.textContent = `Page ${pageNumber}`;
			});
		}
	
		// Fetch the initial set of issues when the page loads
		fetchIssues(pageNumber);
	
		// Add click event listeners to the buttons
		loadPrevButton.addEventListener('click', () => {
		  if (pageNumber > 1) {
			pageNumber--;
			fetchIssues(pageNumber);
		  }
		});
		loadNextButton.addEventListener('click', () => {
		  pageNumber++;
		  fetchIssues(pageNumber);
		});
	  