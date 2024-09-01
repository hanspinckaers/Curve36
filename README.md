# About

![both halves](/images/both.jpg)

This is a diodeless, 36 key, split (reversible PCB), wireless keyboard with Choc V1 switches, based off of the [LambBT](https://github.com/johnlamb/LambBT) and inspired by the rae-dux. The idea to include case magnets and duplicate, adjacent slots for the feet was borrowed from Corax54.

Everything has splay, including the index finger, which is also shifted downwards to sit between ring and pinky fingers in terms of height.
The index finger adjustments try to address the fact that men usually have longer ring than index fingers, as well as hands typically being slightly tilted while typing (due to the thumb pushing the hand up on flat keyboards), which causes the index to flare inwards.
  
Thumb splay is a bit less aggressive than on other keyboards, as I personally noticed my thumbs to prefer slightly more lateral movement.
I also tried to avoid underreaching, while not moving the outer thumb key too far away.

Firmware available [here](https://github.com/jonathanforking/Keiler-ZMK).

![left half](/images/left.jpg)

# Bill of Materials
| Part                                                                          | Quantity | Note                                                 |
|-------------------------------------------------------------------------------|----------|------------------------------------------------------|
| [PCB](/gerbers/pcb.zip)                                                       | 2        | 1.6mm thickness                                      |
| [Switchplate](/gerbers/switchplate.zip)                                       | 2        | 1.2mm thickness                                      |
| nice!nano                                                                     | 2        | Other pro micro boards should also work              |
| 12 pin header                                                                 | 4        |                                                      |
| Pin                                                                           | 48       | Mill Max 3320 recommended                            |
| Seeed XIAO BLE nRF52840                                                       | 1        | Dongle microcontroller                               |
| [Dongle case](https://www.printables.com/de/model/522586-seeed-xiao-ble-case) | 1        |                                                      |
| [Left case](/output/cases/case_left.stl)                                      | 1        | PCTG recommended                                     |
| [Right case](/output/cases/case_right.stl)                                    | 1        | PCTG recommended                                     |
| M2 x 3mm x 3.5mm brass screw insert                                           | 8        |                                                      |
| M2 x 5mm x 1mm plastic washer                                                 | 8        |                                                      |
| M2 x 6mm flat head screw                                                      | 8        |                                                      |
| 10mm x 1mm round neodym magnet                                                | 10       | N52 recommended                                      |
| 8mm self-adhesive feet                                                        | 14       | 3M Bumpons SJ 5076 recommended                       |
| 301230 LiPo battery                                                           | 2        |                                                      |
| On/Off switch                                                                 | 2        | Needs to be compatible with Alps Alpine SSSS811101   |
| Reset button                                                                  | 2        | Needs to be compatible with Omron B3U-1000P          |
| Choc V1 switch                                                                | 36       |                                                      |
| Choc V1 hotswap socket                                                        | 36       |                                                      |
| Choc V1 1u keycap                                                             | 34       |                                                      |
| Choc V1 1.25u keycap                                                          | 2        |                                                      |

# Build instructions
The following is a small manual on how to assemble the keyboard, if you're looking for an exhaustive guide with more basic instructions (e.g. a soldering tutorial), you should turn elsewhere. Don't be discouraged though, as it is a fairly simple procedure, I'm just trying to keep this section short.  
One tip I can give, is to always put some solder on one of the pads upfront whenever you're soldering a component with more than one connection, and then solder that one first by just reheating the pre-applied solder. This lets you focus on properly aligning your component, and provides an 'anchor' for when you do the other pads. 

![jumpers](/images/jumpers.jpg)

1. Solder all the jumpers (the solder pads divided by little > and < borders, next to the holes for the microcontroller pins) on the backside of the PCB (front = side you will type on).

2. Solder your on/off switch above the jumpers on the frontside. Technically you just need to solder the pads with traces to them, but I would recommend doing them all for added stability. Keep it set to *off* for now.

3. Solder the reset button to the vertically aligned pads next to the on/off switch. Its orientation doesn't matter.

4. Solder your choc hotswap sockets on the back of the board. They will be subject to some stress, so make sure to use enough solder to hold them in place (don't be afraid to use 'too much', you won't see it anyways).

5. Solder your battery to the two holes between jumpers and on/off switch on the frontside. The hole closer to the reset button will be the ground (*usually* the black cable). Take care to avoid the battery cables from touching each other, and check your polarity before soldering. I trimmed my cables, so that they don't stick out later (you can probably also just tug them under the battery or the microcontroller).

6. Solder your headers and microcontroller pins. Make sure that your microcontroller is facing *downwards*, i.e. with the chip towards the PCB.

7. Put the brass screw inserts into the case's mountholes with your soldering iron. You can try to keep them level by letting them stick out a little bit and then quickly pressing them down with a flat object (e.g. tweezers) while they're still warm enough to sink in.

8. Use duct tape to hold your magnets in the case. Make sure that their poles align with their counterparts in the other keyboard half so that they attract to each other.

9. Screw the board/switchplate sandwich (separated by washers inbetween) into the case.

10. Attach feet to the case so that they are not in the way of each other when putting both halves together.

11. Insert switches.

12. Repeat for the other half.

Finally, build the [firmware](https://github.com/jonathanforking/Keiler-ZMK) and flash the corresponding `.UF2` file to every microcontroller, by connecting it to your PC via USB, double pressing its reset button, and copying it over (you can just pull out the cable afterwards).
