import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
    imports: [CommonModule, NavigationComponent]
})
export class LandingComponent {
  carouselItems = [
    {
      imageUrl: 'https://i.pinimg.com/236x/7a/e3/37/7ae3370edba908ba0df9469d5d6133b0.jpg',
      caption: 'Image 1'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/d2/3f/c8/d23fc8dd63c85874f8e12fd79c9662e1.jpg',
      caption: 'Image 2'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/a1/10/e1/a110e1bc0897daf7fb10ee75c0d25639.jpg',
      caption: 'Image 3'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/86/8e/56/868e5698a3cd46d753459ff448ab6c16.jpg',
      caption: 'Image 4'
    },
    {
      imageUrl: 'https://i.pinimg.com/550x/81/30/fc/8130fcdd4cac0a958df25b4a71a96f35.jpg',
      caption: 'Image 5'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/b8/ac/51/b8ac51e8e5d9de70114f431574907072.jpg',
      caption: 'Image 6'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/7c/4f/39/7c4f3961236c4914b25a7ec06f8e08e2.jpg',
      caption: 'Image 7'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/3d/40/c9/3d40c99ac6cbb6cd441a1b5fb20cd459.jpg',
      caption: 'Image 8'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/c7/84/cf/c784cfe161c81737cdf2b0f1cfd892cd.jpg',
      caption: 'Image 9'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/b9/54/9f/b9549f80f3a7dbc5a11a4851c1c076b7.jpg',
      caption: 'Image 10'
    },
    {
      imageUrl: 'https://i.pinimg.com/550x/47/92/b7/4792b7bdc6bb8d59304f23d7ac6d109a.jpg',
      caption: 'Image 11'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/92/42/6d/92426d84cd455d958db778d54a94fd00.jpg',
      caption: 'Image 12'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/28/cc/1f/28cc1f5464d7ba55a56e05ee85707dbc.jpg',
      caption: 'Image 13'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/1c/4e/22/1c4e22bc826843b92969d00d3bec53b9.jpg',
      caption: 'Image 14'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/85/a2/1a/85a21aea41cdecdb2de94e16f50db7d0.jpg',
      caption: 'Image 15'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/3f/05/2c/3f052c9b0f402d3373b9e0916c53bac7.jpg',
      caption: 'Image 16'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/b1/44/33/b14433a316a98aa75c4f12b0910ad549.jpg',
      caption: 'Image 17'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/25/95/e0/2595e04c8dd984d89d28db0957a76d1d.jpg',
      caption: 'Image 18'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/c5/bc/21/c5bc21a1fc21b6015acf43f0a939c833.jpg',
      caption: 'Image 19'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/85/c5/62/85c562e7f72b6cccaa3f09399077bc22.jpg',
      caption: 'Image 20'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/81/20/26/812026f8ac451726e00f05c7ebed409a.jpg',
      caption: 'Image 21'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/c7/11/83/c71183098d2198cd9006e939b7ec3afb.jpg',
      caption: 'Image 22'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/30/29/45/3029453a4d74034d64beb8f6021ce710.jpg',
      caption: 'Image 23'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/68/8f/b1/688fb1db4da88f6c6749249e8d2b3734.jpg',
      caption: 'Image 24'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/98/fd/d7/98fdd7f1ecc1c8935ccf39d2aac81f09.jpg',
      caption: 'Image 25'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/ec/3d/16/ec3d16a602038f70dba288bc00ec7e37.jpg',
      caption: 'Image 26'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/a7/02/84/a70284853f4e02c9038123ea77fd0186.jpg',
      caption: 'Image 27'
    },
    {
      imageUrl: 'https://i.pinimg.com/550x/8c/2b/a8/8c2ba8d19852209a6ab8f69e097ff278.jpg',
      caption: 'Image 28'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/1b/8b/52/1b8b52de400ad51e36af7217d2347a83.jpg',
      caption: 'Image 29'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/67/2f/71/672f7160ee2b9130ac177fb3ed975213.jpg',
      caption: 'Image 30'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/bf/36/3a/bf363a930744d78f467787241198e51a.jpg',
      caption: 'Image 31'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/b9/44/72/b944727d606e5429bd1774790ef79353.jpg',
      caption: 'Image 32'
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/a0/a0/5c/a0a05cc39b3668ec4b07b58ced608dac.jpg',
      caption: 'Image 33'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/83/ac/64/83ac64291afee7c00c3b2d3bec6c79e0.jpg',
      caption: 'Image 34'
    },
    {
      imageUrl: 'https://i.pinimg.com/564x/8c/a8/5f/8ca85fd7930a2d8e180f9b229341d2c6.jpg',
      caption: 'Image 35'
    }
  ];
  
  setClass(index: number){
    if(index % 5 == 0){
      console.log(index)
      return 'mt-10 bg-red-100'
    }
    return null;
  }
  
}
