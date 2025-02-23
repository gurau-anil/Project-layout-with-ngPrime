import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutService } from './app/layout/service/layout.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

    constructor(private layoutService: LayoutService) { }
    
    ngOnInit(): void {
        this.layoutService.layoutConfig.set({
            preset: 'Lara', //Aura,Lara,Nora
            primary: 'emerald', //'emerald', 'green', 'lime', 'orange', 'amber', 'yellow', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
            surface: null, //'slate', 'gray', 'zinc', 'neutral', 'stone', 'soho', 'viva', 'ocean'
            darkTheme: false, // true, false
            menuMode: 'static' //static, overlay
          });
    }
}
