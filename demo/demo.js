/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
 $(document).ready(function(){
 $('#toggle-switcher').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'left':'-220px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'left':'0'});
		}
	});
});

// Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", function() {
        // Get all the portfolio navigation items
        const portfolioNavItems = document.querySelectorAll("#filter-button li");
        // Get all the grid items
        const gridItems = document.querySelectorAll(".grid-item");

        // Add click event listeners to portfolio navigation items
        portfolioNavItems.forEach(function(navItem) {
            navItem.addEventListener("click", function() {
                // Remove the "current" class from all portfolio navigation items
                portfolioNavItems.forEach(function(item) {
                    item.classList.remove("current");
                });
                // Add the "current" class to the clicked portfolio navigation item
                this.classList.add("current");

                // Get the filter value from the clicked portfolio navigation item
                const filterValue = this.getAttribute("data-filter");

                // Show/hide the grid items based on the filter value
                gridItems.forEach(function(item) {
                    if (item.classList.contains(filterValue)) {
                        item.classList.remove("hidden");
                    } else {
                        item.classList.add("hidden");
                    }
                });
            });
        });
    });
