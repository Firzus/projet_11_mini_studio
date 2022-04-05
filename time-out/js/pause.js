function create() {

    pause_label = game.add.text(w - 100, 20, 'Pause', { font: '24px Arial', fill: '#fff' });
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {

        game.paused = true;

       
        menu = game.add.sprite(w/2, h/2, 'menu');
        menu.anchor.setTo(0.5, 0.5);

        
        choiseLabel = game.add.text(w/2, h-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
        choiseLabel.anchor.setTo(0.5, 0.5);
    });

    
    game.input.onDown.add(unpause, self);

    
    function unpause(event){
        
        if(game.paused){
            
            var x1 = w/2 - 270/2, x2 = w/2 + 270/2,
                y1 = h/2 - 180/2, y2 = h/2 + 180/2;

            
            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                
                var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];

                
                var x = event.x - x1,
                    y = event.y - y1;

                
                var choise = Math.floor(x / 90) + 3*Math.floor(y / 90);

                
                choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
            }
            else{
                
                menu.destroy();
                choiseLabel.destroy();

                game.paused = false;
            }
        }
    };
}