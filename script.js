$(document).ready(function() {
     $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var formContainer = $(".form-container");
        if (scroll >= 100) { 
            formContainer.addClass("scrolled");
        } else {
            formContainer.removeClass("scrolled");
        }
    });

    //Array of memories (image URLs and descriptions)
    var memories = [
        { imageUrl: "https://images.pexels.com/photos/6479553/pexels-photo-6479553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "Grandma, like chrysanthemums in bloom, your love remains eternal." },
        { imageUrl: "https://images.pexels.com/photos/11631446/pexels-photo-11631446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "Grandpa, in the gentle sway of orchids, I feel your strength and wisdom." }, 
        { imageUrl: "https://images.pexels.com/photos/8962352/pexels-photo-8962352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "With each bloom of the amaryllis, my heart overflows with gratitude for you, Mom." },
        { imageUrl: "https://images.pexels.com/photos/5367135/pexels-photo-5367135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", description: "In a garden of lillies, your love is the most beautiful bloom, Dad." },
    ];
    
    $("#descriptionInput").on("input", function() {
        var charCount = $(this).val().length;
        $('#characterCount').text(charCount + "/50");
    });
    
    $('#minimizeBtn').click(function() {
        $('.form-container').css('height', '26px');
        $(this).hide();
        $('#maximizeBtn').show();
      });
    
      $('#maximizeBtn').click(function() {
        $('.form-container').css('height', 'auto');
        $(this).hide();
        $('#minimizeBtn').show();
      });

    // Function to display memories in the gallery
    function displayMemories() {
        var gallery = $("#photoGallery");
        gallery.empty();
        
        memories.forEach(function(memory) {
            var photoContainer = $("<div>").addClass("photo-container");
            var image = $("<img>").attr("src", memory.imageUrl);
            var description = $("<p>").addClass("photo-description").text(memory.description);
            
            photoContainer.append(image, description);
            gallery.append(photoContainer);
        });
    }
    
    // Display initial memories on page load
    displayMemories();

    // Add a new memory to the gallery
    $("#addButton").click(function() {
        var newImageUrl = $("#imageLinkInput").val(); // Get image URL from input field
        var newDescription = $("#descriptionInput").val(); // Get description from input field
        
        // Add the new memory to the array
        memories.push({ imageUrl: newImageUrl, description: newDescription });
        
        // Display the updated gallery
        displayMemories();

        // Clear input fields after adding memory
        $("#imageLinkInput").val("");
        $("#descriptionInput").val("");
    });
});