import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProductData } from '../../interfaces/home/iproduct-data';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searchValue: string = '';
  productList: IProductData[] = [
    {
      id: 1,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
      price: 190,
      quantity: 225,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg',
      ],
      onSale: false,
    },
    {
      id: 2,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg',
      ],
      onSale: true,
    },
    {
      id: 3,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156554-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680403156556-4.jpeg',
      ],
      onSale: false,
    },
    {
      id: 4,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg',
      price: 149,
      quantity: 220,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838330-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-5.jpeg',
      ],
      onSale: true,
    },
    {
      id: 5,
      title: 'Woman Shawl',
      description: 'Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg',
      price: 349,
      quantity: 228,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563675-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-5.jpeg',
      ],
      onSale: false,
    },
    {
      id: 6,
      title: 'Woman Bordeaux Long Sleeve Blouse BORDEAUX',
      description: 'ShellFabric1 Cotton 65% Polyester 35%',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680402411833-cover.jpeg',
      price: 499,
      quantity: 228,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402411883-1.jpeg',
      ],
      onSale: true,
    },
    {
      id: 7,
      title: 'Woman Brown Long Sleeve Tunic LT.CAMEL',
      description: 'ShellFabric1 Cotton 65% Polyester 35%',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680402295928-cover.jpeg',
      price: 499,
      quantity: 229,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402296306-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402296305-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680402296305-2.jpeg',
      ],
      onSale: false,
    },
    {
      id: 8,
      title: 'Woman Standart Fit Knitted Cardigan',
      description: 'Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680401893316-cover.jpeg',
      price: 499,
      quantity: 222,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893497-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401893496-3.jpeg',
      ],
      onSale: true,
    },
    {
      id: 9,
      title: 'Relaxed Fit Knitted Joggers Lilac',
      description: 'Colour Name\tPink\nDepartment\tWomen\nMaterial Composition\tPolyester Blend',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680401672268-cover.jpeg',
      price: 499,
      quantity: 222,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672624-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672623-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401672624-3.jpeg',
      ],
      onSale: false,
    },
    {
      id: 10,
      title: 'Woman Socks',
      description: 'Colour Name\tPink\nDepartment\tWomen\nMaterial Composition\tPolyester Blend',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680401528864-cover.jpeg',
      price: 199,
      quantity: 117,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401528923-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401528924-2.jpeg',
      ],
      onSale: true,
    },
    {
      id: 11,
      title: 'Woman Karma Socks Multicolour',
      description:
        'Soft and comfortable cotton fabric\nCrew neck and short sleeves\nComfortable, regular fit\nWash according to care label instructions',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680401176411-cover.jpeg',
      price: 199,
      quantity: 117,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401176767-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401176766-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680401176768-3.jpeg',
      ],
      onSale: false,
    },
    {
      id: 12,
      title: 'Logo T-Shirt Green',
      description:
        'Soft and comfortable cotton fabric\nCrew neck and short sleeves\nComfortable, regular fit\nWash according to care label instructions',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680400287654-cover.jpeg',
      price: 744,
      quantity: 111,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400287765-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400287767-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400287767-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400287765-2.jpeg',
      ],
      onSale: true,
    },
    {
      id: 13,
      title: 'Orca Leather Boots Anthracite',
      description:
        'Genuine and smooth leather upper\nSecure lace-ups with side zipper closure\nSlightly cushioned footbed provides comfort\nPatterned chunky outsole provides traction and grip',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680400120400-cover.jpeg',
      price: 4829,
      quantity: 273,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400120770-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400120771-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400120769-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680400120771-4.jpeg',
      ],
      onSale: false,
    },
    {
      id: 14,
      title: 'Softride Enzo NXT CASTLEROCK-High Risk R',
      description: 'Sole Material\tRubber\nColour Name\tRED\nDepartment\tMen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680399913757-cover.jpeg',
      price: 2999,
      quantity: 173,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913850-1.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913850-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399913851-5.jpeg',
      ],
      onSale: true,
    },
    {
      id: 15,
      title: 'ESS Big Logo Hoodie TR Puma Black',
      description: 'Material\tCombination\nColour Name\tblack\nDepartment\tMen',
      imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680399661234-cover.jpeg',
      price: 2649,
      quantity: 200,
      images: [
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399661306-2.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399661306-4.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399661306-3.jpeg',
        'https://ecommerce.routemisr.com/Route-Academy-products/1680399661305-1.jpeg',
      ],
      onSale: false,
    },
    {
      id: 16,
      title: 'Men Denim Blue Jacket',
      description: 'Material\t100% Cotton Denim\nColour Name\tBlue\nDepartment\tMen',
      imageCover:
        'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
      price: 1299,
      quantity: 150,
      images: [
        'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 17,
      title: 'Woman White Casual T-Shirt',
      description: 'Material\t100% Premium Cotton\nColour Name\tWhite\nDepartment\tWomen',
      imageCover:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
      price: 350,
      quantity: 210,
      images: [
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
    {
      id: 18,
      title: 'Classic White Sneakers',
      description: 'Sole Material\tDurable Rubber\nColour Name\tWhite\nDepartment\tUnisex',
      imageCover:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
      price: 1850,
      quantity: 120,
      images: [
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 19,
      title: 'Black Leather Boots',
      description: 'Material\tGenuine Leather\nColour Name\tBlack\nDepartment\tMen',
      imageCover:
        'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop',
      price: 2499,
      quantity: 85,
      images: [
        'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
    {
      id: 20,
      title: 'Woman Elegant Brown Handbag',
      description: 'Material\tPU Leather\nColour Name\tBrown\nDepartment\tWomen',
      imageCover:
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
      price: 1100,
      quantity: 95,
      images: [
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 21,
      title: 'Men Black Hoodie',
      description: 'Material\tFleece Cotton Blend\nColour Name\tBlack\nDepartment\tMen',
      imageCover:
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
      price: 890,
      quantity: 160,
      images: [
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
    {
      id: 22,
      title: 'Woman Red High Heels',
      description: 'Material\tSuede Synthetic\nColour Name\tRed\nDepartment\tWomen',
      imageCover:
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
      price: 1450,
      quantity: 70,
      images: [
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518049362265-d7b2a8a3c0b0?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 23,
      title: 'Unisex Modern Sunglasses',
      description: 'Frame Material\tAcetate\nColour Name\tBlack\nDepartment\tUnisex',
      imageCover:
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
      price: 650,
      quantity: 230,
      images: [
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
    {
      id: 24,
      title: 'Men Casual Checked Shirt',
      description: 'Material\t100% Cotton Flannel\nColour Name\tRed/Black\nDepartment\tMen',
      imageCover:
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
      price: 580,
      quantity: 140,
      images: [
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613108436364-7ae91c0c96a9?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 25,
      title: 'Woman Knitted Winter Scarf',
      description: 'Material\tSoft Acrylic Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover:
        'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop',
      price: 290,
      quantity: 180,
      images: [
        'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1520903920245-00d872a2d1c4?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1523611698377-5f5f1a4d9c8b?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
    {
      id: 26,
      title: 'Men Polo Shirt Navy Blue',
      description: 'Material\t100% Cotton Pique\nColour Name\tNavy Blue\nDepartment\tMen',
      imageCover:
        'https://images.unsplash.com/photo-1625910513413-21345d3550e1?q=80&w=800&auto=format&fit=crop',
      price: 450,
      quantity: 220,
      images: [
        'https://images.unsplash.com/photo-1625910513413-21345d3550e1?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 27,
      title: 'Woman Summer Floral Dress',
      description: 'Material\tSoft Viscose Blend\nColour Name\tMulticolour\nDepartment\tWomen',
      imageCover:
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop',
      price: 920,
      quantity: 110,
      images: [
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
    {
      id: 28,
      title: 'Men Slim Fit Chino Pants Khaki',
      description: 'Material\tCotton Stretch\nColour Name\tKhaki\nDepartment\tMen',
      imageCover:
        'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop',
      price: 750,
      quantity: 135,
      images: [
        'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 29,
      title: 'Unisex Classic Wrist Watch',
      description: 'Strap Material\tLeather\nDial Colour\tBlack\nDepartment\tUnisex',
      imageCover:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
      price: 3200,
      quantity: 60,
      images: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
    {
      id: 30,
      title: 'Woman Oversized Knitted Cardigan Beige',
      description: 'Material\tWool Blend\nColour Name\tBeige\nDepartment\tWomen',
      imageCover:
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop',
      price: 890,
      quantity: 175,
      images: [
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 31,
      title: 'Men Grey Jogger Sweatpants',
      description: 'Material\tCotton Polyester Blend\nColour Name\tGrey\nDepartment\tMen',
      imageCover:
        'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop',
      price: 520,
      quantity: 200,
      images: [
        'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590080874088-e9e8fb78d47c?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 32,
      title: 'Woman Black Leather Jacket',
      description: 'Material\tGenuine Leather\nColour Name\tBlack\nDepartment\tWomen',
      imageCover:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
      price: 2150,
      quantity: 75,
      images: [
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1521227870433-72fb8e9a73b0?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
    {
      id: 33,
      title: 'Unisex Canvas Backpack',
      description: 'Material\tHeavy Duty Canvas\nColour Name\tOlive Green\nDepartment\tUnisex',
      imageCover:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
      price: 980,
      quantity: 130,
      images: [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1575909812264-6902b55846ad?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 34,
      title: 'Men Navy Blue Blazer',
      description: 'Material\tWool Polyester Blend\nColour Name\tNavy Blue\nDepartment\tMen',
      imageCover:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
      price: 2750,
      quantity: 55,
      images: [
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1591369822096-ffd1405cf2e1?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
    {
      id: 35,
      title: 'Woman Gold Chain Necklace',
      description: 'Material\tStainless Steel Gold Plated\nColour Name\tGold\nDepartment\tWomen',
      imageCover:
        'https://images.unsplash.com/photo-1585676761797-0f7b0f0e5b5a?q=80&w=800&auto=format&fit=crop',
      price: 680,
      quantity: 250,
      images: [
        'https://images.unsplash.com/photo-1585676761797-0f7b0f0e5b5a?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: true,
    },
    {
      id: 36,
      title: 'Unisex Baseball Cap Black',
      description: 'Material\tCotton Twill\nColour Name\tBlack\nDepartment\tUnisex',
      imageCover:
        'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
      price: 280,
      quantity: 300,
      images: [
        'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=800&auto=format&fit=crop',
      ],
      onSale: false,
    },
  ];

  //^ Image On Error Case
  handleImageError(event: any) {
    event.target.src = '/assets/images/not_foundimage.png';
  }

  //^ Chnage Image Method
  changeMainImage(product: IProductData, newImage: string) {
    if (product.imageCover !== newImage) {
      product.imageCover = newImage;
    }
  }

  //^ Filter Products
  get filteredProducts(): IProductData[] {
    if (!this.searchValue.trim()) return this.productList;
    return this.productList.filter((product) =>
      product.title.toLowerCase().includes(this.searchValue.trim().toLowerCase()),
    );
  }
}
