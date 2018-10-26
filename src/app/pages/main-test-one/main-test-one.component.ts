import {Component, OnInit, TemplateRef} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


@Component({
  selector: 'app-main-test-one',
  templateUrl: './main-test-one.component.html',
  styleUrls: ['./main-test-one.component.scss']
})
export class MainTestOneComponent implements OnInit {

  customStyle = {
    fontSize: '20px',
    textTransform: 'uppercase',
    fontColor: '#fff',
    backgroundColor: '#fff'
  };

  data = [
    { id: 1,
      active: true,
      name  : 'Test 1',
      arrow : true,
      items: [
        { nombre: 'FACTOR V', route: 'factorV'},
        { nombre: 'FACTOR E', route: 'factorE'},
        { nombre: 'FACTOR R', route: 'factorR'},
        { nombre: 'FACTOR N', route: 'factorN'},
        { nombre: 'FACTOR F', route: 'factorF'},
      ],
      customStyle: this.customStyle
    },
    { id: 2,
      active: false,
      name  : 'Test 2',
      arrow : false,
      items: [],
      customStyle: this.customStyle
    },
    { id: 3,
      active: false,
      name  : 'Test 3',
      arrow : false,
      items: [],
      customStyle: this.customStyle
    },
    { id: 4,
      active: false,
      name  : 'Test 4',
      arrow : false,
      items: [],
      customStyle: this.customStyle
    },
    { id: 5,
      active: false,
      name  : 'Test 5',
      arrow : false,
      items: [],
      customStyle: this.customStyle
    },
    ];

  /*
  {
      active: true,
      name  : 'This is panel header 1',
      arrow : true
    },
    {
      active: false,
      arrow : false,
      name  : 'This is panel header 2'
    }
   */

  constructor(private http: HttpClient,
              private router: Router,
              private msg: NzMessageService) {}

  ngOnInit(): void {

  }

  routeandoFactores( route ) {
    this.router.navigateByUrl('/principalT1/' + route );
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }
}
