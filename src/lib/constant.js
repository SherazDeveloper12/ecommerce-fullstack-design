import outdoorChairImg from '../assets/Image/interior/1.png'
import interiorbg from '../assets/Image/backgrounds/interiorbg.png'
import electronicsbg from '../assets/Image/backgrounds/electronicsbg.png'
import sofaImg from '../assets/Image/interior/5.png'
import kitchenDishImg from '../assets/Image/interior/3.png'
import smartWatchImg from '../assets/Image/interior/4.png'
import kitchenMixerImg from '../assets/Image/interior/5.png'
import blenderImg from '../assets/Image/interior/6.png'
import homeApplianceImg from '../assets/Image/interior/7.png'
import coffeeMakerImg from '../assets/Image/interior/8.png'
import laptopImg from '../assets/Image/tech/1.png'
import smartphoneImg from '../assets/Image/tech/2.png'
import wirelessEarbudsImg from '../assets/Image/tech/3.png'
import gamingConsoleImg from '../assets/Image/tech/4.png'
import tabletImg from '../assets/Image/tech/5.png'
import tvImg from '../assets/Image/tech/6.png'
import bluetoothSpeakerImg from '../assets/Image/tech/7.png'
import smartWatchTechImg from '../assets/Image/tech/8.png'

export const showcaseStuff = [
    {
    title: "Home And outdoor Furniture",
    backgroundImg: interiorbg,
    products:  [
            { name: 'Soft chairs', price: '19', img: outdoorChairImg },
            { name: 'Sofa', price: '99', img: sofaImg },
            { name: 'Kitchen Dish Set', price: '29', img: kitchenDishImg },
            { name: 'Smart Watch', price: '49', img: smartWatchImg },
            { name: 'Kitchen Mixer', price: '39', img: kitchenMixerImg },
            { name: 'Blender', price: '59', img: blenderImg },
            { name: 'Home Appliance', price: '199', img: homeApplianceImg },
            { name: 'Coffee Maker', price: '89', img: coffeeMakerImg },
        ]
    },
    {
    title: "Consumer Electronics and Gadgets",
    backgroundImg: electronicsbg,
    products:  [
            { name: 'Smartphone', price: '699', img: smartphoneImg },
            { name: 'Laptop', price: '999', img: laptopImg },
            { name: 'Wireless Earbuds', price: '199', img: wirelessEarbudsImg },
            { name: 'Smartwatch', price: '299', img: smartWatchTechImg },
            { name: 'Tablet', price: '499', img: tabletImg },
            { name: 'Gaming Console', price: '399', img: gamingConsoleImg },
            { name: '4K TV', price: '799', img: tvImg },
            { name: 'Bluetooth Speaker', price: '149', img: bluetoothSpeakerImg },
            
    ]
    }
]