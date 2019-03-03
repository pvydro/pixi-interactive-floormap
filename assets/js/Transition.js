var Transition = {
    darkener: $('.darkener'),
    transitioning: false,

    enableTransition: function(onComplete) {
        $('.darkener').addClass("enabled");
        $('.darkener')
        .on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 
        function(e) {
            $(this).off();
            onComplete();

            this.disableTransition();
        }.bind(this));
    },

    disableTransition: function() {
        $('.darkener').off();
        setTimeout(function() {
            $('.darkener').removeClass('enabled');

            $('.darkener').css({
                'margin-top': '200vh',
                'transition': '0.3s'
            });
            
            $('.darkener')
            .on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', 
            function(e) {
                $(this).off();
                $('.darkener').css({
                    'margin-top': '-100vh',
                    'transition': '0s'
                });
            });
        }, 600);

    }
}