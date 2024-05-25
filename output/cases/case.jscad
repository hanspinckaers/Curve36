function standoff_extrude_5_outline_fn(){
    return CAG.circle({"center":[249.791655,-167.9178758],"radius":2.5})
.union(
    CAG.circle({"center":[197.6101202,-102.2676022],"radius":2.5})
).union(
    CAG.circle({"center":[160.9238218,-159.8586316],"radius":2.5})
).union(
    CAG.circle({"center":[152.4399984,-111.1962772],"radius":2.5})
).extrude({ offset: [0, 0, 5] });
}


function mounting_extrude_5_outline_fn(){
    return CAG.circle({"center":[249.791655,-167.9178758],"radius":1.5})
.union(
    CAG.circle({"center":[197.6101202,-102.2676022],"radius":1.5})
).union(
    CAG.circle({"center":[160.9238218,-159.8586316],"radius":1.5})
).union(
    CAG.circle({"center":[152.4399984,-111.1962772],"radius":1.5})
).extrude({ offset: [0, 0, 5] });
}


function _case_xlplate_extrude_2_outline_fn(){
    return new CSG.Path2D([[150.3468803,-102.2843495],[126.9861768,-108.5438311]]).appendArc([126.27907,-109.7685759],{"radius":1,"clockwise":false,"large":false}).appendPoint([140.8794915,-164.2580904]).appendArc([141.6024268,-164.9693001],{"radius":1,"clockwise":false,"large":false}).appendPoint([160.7716942,-169.771169]).appendArc([245.9609785,-195.1666359],{"radius":197.5,"clockwise":true,"large":false}).appendArc([246.9508606,-194.7216242],{"radius":1,"clockwise":false,"large":false}).appendPoint([259.6038944,-175.1843896]).appendArc([258.5826368,-139.6336365],{"radius":247.5,"clockwise":true,"large":false}).appendPoint([258.4664688,-137.3604773]).appendArc([258.4715936,-137.1962365],{"radius":1,"clockwise":true,"large":false}).appendPoint([258.9731096,-132.794487]).appendArc([259.8771267,-122.884936],{"radius":247.5,"clockwise":true,"large":false}).appendArc([259.158176,-122.4309116],{"radius":1,"clockwise":false,"large":false}).appendPoint([240.0595199,-120.0478781]).appendArc([239.1897628,-118.9423696],{"radius":1,"clockwise":true,"large":false}).appendPoint([241.1154209,-102.041086]).appendArc([240.2350522,-100.9343109],{"radius":1,"clockwise":false,"large":false}).appendPoint([224.4046925,-99.1306693]).appendArc([223.521104,-98.0570577],{"radius":1,"clockwise":true,"large":false}).appendPoint([223.6065242,-96.9932596]).appendArc([222.7229357,-95.919648],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.0993224,-93.1141417]).appendArc([197.2137029,-92.1690792],{"radius":1,"clockwise":true,"large":false}).appendPoint([196.6400097,-80.3565754]).appendArc([195.61501,-79.4054275],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.5619662,-80.0090928]).appendArc([171.5882334,-80.9953226],{"radius":1,"clockwise":false,"large":false}).appendPoint([171.5505822,-83.7991089]).appendArc([170.6378281,-84.7818761],{"radius":1,"clockwise":true,"large":false}).appendPoint([151.1882145,-86.4834968]).appendArc([150.2771048,-87.5385662],{"radius":1,"clockwise":false,"large":false}).appendPoint([151.0863267,-101.259549]).appendArc([150.3468803,-102.2843495],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}


function _case_xlplate_extrude_9_2_outline_fn(){
    return new CSG.Path2D([[150.3468803,-102.2843495],[126.9861768,-108.5438311]]).appendArc([126.27907,-109.7685759],{"radius":1,"clockwise":false,"large":false}).appendPoint([140.8794915,-164.2580904]).appendArc([141.6024268,-164.9693001],{"radius":1,"clockwise":false,"large":false}).appendPoint([160.7716942,-169.771169]).appendArc([245.9609785,-195.1666359],{"radius":197.5,"clockwise":true,"large":false}).appendArc([246.9508606,-194.7216242],{"radius":1,"clockwise":false,"large":false}).appendPoint([259.6038944,-175.1843896]).appendArc([258.5826368,-139.6336365],{"radius":247.5,"clockwise":true,"large":false}).appendPoint([258.4664688,-137.3604773]).appendArc([258.4715936,-137.1962365],{"radius":1,"clockwise":true,"large":false}).appendPoint([258.9731096,-132.794487]).appendArc([259.8771267,-122.884936],{"radius":247.5,"clockwise":true,"large":false}).appendArc([259.158176,-122.4309116],{"radius":1,"clockwise":false,"large":false}).appendPoint([240.0595199,-120.0478781]).appendArc([239.1897628,-118.9423696],{"radius":1,"clockwise":true,"large":false}).appendPoint([241.1154209,-102.041086]).appendArc([240.2350522,-100.9343109],{"radius":1,"clockwise":false,"large":false}).appendPoint([224.4046925,-99.1306693]).appendArc([223.521104,-98.0570577],{"radius":1,"clockwise":true,"large":false}).appendPoint([223.6065242,-96.9932596]).appendArc([222.7229357,-95.919648],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.0993224,-93.1141417]).appendArc([197.2137029,-92.1690792],{"radius":1,"clockwise":true,"large":false}).appendPoint([196.6400097,-80.3565754]).appendArc([195.61501,-79.4054275],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.5619662,-80.0090928]).appendArc([171.5882334,-80.9953226],{"radius":1,"clockwise":false,"large":false}).appendPoint([171.5505822,-83.7991089]).appendArc([170.6378281,-84.7818761],{"radius":1,"clockwise":true,"large":false}).appendPoint([151.1882145,-86.4834968]).appendArc([150.2771048,-87.5385662],{"radius":1,"clockwise":false,"large":false}).appendPoint([151.0863267,-101.259549]).appendArc([150.3468803,-102.2843495],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 9.2] });
}


function _case_pcb_extrude_9_2_outline_fn(){
    return new CSG.Path2D([[152.7799903,-103.702952],[129.4356666,-109.9580447]]).appendArc([128.7285598,-111.1827895],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.2958084,-161.8164503]).appendArc([143.007008,-162.5246445],{"radius":1,"clockwise":false,"large":false}).appendPoint([163.6757533,-167.9691116]).appendArc([244.8951393,-192.2766941],{"radius":199.5,"clockwise":true,"large":false}).appendPoint([245.194328,-192.37227]).appendArc([246.3372165,-191.9644601],{"radius":1,"clockwise":false,"large":false}).appendPoint([257.4311571,-174.886959]).appendArc([257.541592,-174.6573998],{"radius":1,"clockwise":false,"large":false}).appendArc([257.7242904,-124.1864444],{"radius":249.5,"clockwise":true,"large":false}).appendPoint([237.8513181,-121.8044329]).appendArc([236.9767562,-120.6983366],{"radius":1,"clockwise":true,"large":false}).appendPoint([238.9018707,-103.8018233]).appendArc([238.021502,-102.6950482],{"radius":1,"clockwise":false,"large":false}).appendPoint([222.1911424,-100.8914066]).appendArc([221.3075539,-99.817795],{"radius":1,"clockwise":true,"large":false}).appendPoint([221.392974,-98.7539969]).appendArc([220.5093855,-97.6803853],{"radius":1,"clockwise":false,"large":false}).appendPoint([195.9020618,-94.8767349]).appendArc([195.0157043,-93.9128017],{"radius":1,"clockwise":true,"large":false}).appendPoint([194.6751479,-82.4276027]).appendArc([193.6494103,-81.4575841],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.637924,-81.9554174]).appendArc([173.6641673,-82.9666018],{"radius":1,"clockwise":false,"large":false}).appendPoint([173.6944583,-85.5942312]).appendArc([172.7816804,-86.601953],{"radius":1,"clockwise":true,"large":false}).appendPoint([153.3746844,-88.2998451]).appendArc([152.4649681,-89.3750722],{"radius":1,"clockwise":false,"large":false}).appendPoint([153.5180433,-102.6579938]).appendArc([152.7799903,-103.702952],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 9.2] });
}


function _case_pcb_extrude_5_outline_fn(){
    return new CSG.Path2D([[152.7799903,-103.702952],[129.4356666,-109.9580447]]).appendArc([128.7285598,-111.1827895],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.2958084,-161.8164503]).appendArc([143.007008,-162.5246445],{"radius":1,"clockwise":false,"large":false}).appendPoint([163.6757533,-167.9691116]).appendArc([244.8951393,-192.2766941],{"radius":199.5,"clockwise":true,"large":false}).appendPoint([245.194328,-192.37227]).appendArc([246.3372165,-191.9644601],{"radius":1,"clockwise":false,"large":false}).appendPoint([257.4311571,-174.886959]).appendArc([257.541592,-174.6573998],{"radius":1,"clockwise":false,"large":false}).appendArc([257.7242904,-124.1864444],{"radius":249.5,"clockwise":true,"large":false}).appendPoint([237.8513181,-121.8044329]).appendArc([236.9767562,-120.6983366],{"radius":1,"clockwise":true,"large":false}).appendPoint([238.9018707,-103.8018233]).appendArc([238.021502,-102.6950482],{"radius":1,"clockwise":false,"large":false}).appendPoint([222.1911424,-100.8914066]).appendArc([221.3075539,-99.817795],{"radius":1,"clockwise":true,"large":false}).appendPoint([221.392974,-98.7539969]).appendArc([220.5093855,-97.6803853],{"radius":1,"clockwise":false,"large":false}).appendPoint([195.9020618,-94.8767349]).appendArc([195.0157043,-93.9128017],{"radius":1,"clockwise":true,"large":false}).appendPoint([194.6751479,-82.4276027]).appendArc([193.6494103,-81.4575841],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.637924,-81.9554174]).appendArc([173.6641673,-82.9666018],{"radius":1,"clockwise":false,"large":false}).appendPoint([173.6944583,-85.5942312]).appendArc([172.7816804,-86.601953],{"radius":1,"clockwise":true,"large":false}).appendPoint([153.3746844,-88.2998451]).appendArc([152.4649681,-89.3750722],{"radius":1,"clockwise":false,"large":false}).appendPoint([153.5180433,-102.6579938]).appendArc([152.7799903,-103.702952],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function _case_inner_pcb_extrude_5_outline_fn(){
    return new CSG.Path2D([[153.874523,-104.3414213],[130.537937,-110.5944408]]).appendArc([129.8308302,-111.8191856],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.9331168,-160.7175844]).appendArc([143.6392123,-161.4244197],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.0009491,-167.1722599]).appendArc([244.3505038,-190.9509256],{"radius":200.4,"clockwise":true,"large":false}).appendPoint([244.9204965,-191.1317627]).appendArc([246.0610476,-190.7240337],{"radius":1,"clockwise":false,"large":false}).appendPoint([256.2015522,-175.1420318]).appendArc([256.3594251,-174.6857518],{"radius":1,"clockwise":false,"large":false}).appendPoint([256.4958154,-173.1622854]).appendArc([256.7285207,-125.066758],{"radius":250.4,"clockwise":true,"large":false}).appendPoint([236.8506306,-122.6003566]).appendArc([235.9801921,-121.4947633],{"radius":1,"clockwise":true,"large":false}).appendPoint([237.9057732,-104.5941551]).appendArc([237.0254045,-103.48738],{"radius":1,"clockwise":false,"large":false}).appendPoint([221.1950448,-101.6837383]).appendArc([220.3114563,-100.6101267],{"radius":1,"clockwise":true,"large":false}).appendPoint([220.3968765,-99.5463287]).appendArc([219.513288,-98.4727171],{"radius":1,"clockwise":false,"large":false}).appendPoint([194.9136262,-95.6699397]).appendArc([194.0270471,-94.6972316],{"radius":1,"clockwise":true,"large":false}).appendPoint([193.7904543,-83.3598584]).appendArc([192.7644951,-82.3810649],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.572764,-82.8312463]).appendArc([174.5992105,-83.854124],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.6583804,-86.4016257]).appendArc([173.7458057,-87.4210408],{"radius":1,"clockwise":true,"large":false}).appendPoint([154.3590604,-89.1171613]).appendArc([153.4501335,-90.2017838],{"radius":1,"clockwise":false,"large":false}).appendPoint([154.6117866,-103.2870677]).appendArc([153.874523,-104.3414213],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5] });
}


function _usbcutout_extrude_12_outline_fn(){
    return new CSG.Path2D([[242.9826442,-129.821035],[248.9440753,-130.5002543]]).appendArc([250.0508504,-129.6198857],{"radius":1,"clockwise":false,"large":false}).appendPoint([250.9564761,-121.6713108]).appendArc([250.0761074,-120.5645357],{"radius":1,"clockwise":false,"large":false}).appendPoint([244.1146763,-119.8853165]).appendArc([243.0079012,-120.7656851],{"radius":1,"clockwise":false,"large":false}).appendPoint([242.1022755,-128.71426]).appendArc([242.9826442,-129.8210351],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 12] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function _xlbottom_case_fn() {
                    

                // creating part 0 of case _xlbottom
                let _xlbottom__part_0 = _case_xlplate_extrude_2_outline_fn();

                // make sure that rotations are relative
                let _xlbottom__part_0_bounds = _xlbottom__part_0.getBounds();
                let _xlbottom__part_0_x = _xlbottom__part_0_bounds[0].x + (_xlbottom__part_0_bounds[1].x - _xlbottom__part_0_bounds[0].x) / 2
                let _xlbottom__part_0_y = _xlbottom__part_0_bounds[0].y + (_xlbottom__part_0_bounds[1].y - _xlbottom__part_0_bounds[0].y) / 2
                _xlbottom__part_0 = translate([-_xlbottom__part_0_x, -_xlbottom__part_0_y, 0], _xlbottom__part_0);
                _xlbottom__part_0 = rotate([0,0,0], _xlbottom__part_0);
                _xlbottom__part_0 = translate([_xlbottom__part_0_x, _xlbottom__part_0_y, 0], _xlbottom__part_0);

                _xlbottom__part_0 = translate([0,0,0], _xlbottom__part_0);
                let result = _xlbottom__part_0;
                
            
                    return result;
                }
            
            

                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;
                
            

                // creating part 1 of case _wall
                let _wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let _wall__part_1_bounds = _wall__part_1.getBounds();
                let _wall__part_1_x = _wall__part_1_bounds[0].x + (_wall__part_1_bounds[1].x - _wall__part_1_bounds[0].x) / 2
                let _wall__part_1_y = _wall__part_1_bounds[0].y + (_wall__part_1_bounds[1].y - _wall__part_1_bounds[0].y) / 2
                _wall__part_1 = translate([-_wall__part_1_x, -_wall__part_1_y, 0], _wall__part_1);
                _wall__part_1 = rotate([0,0,0], _wall__part_1);
                _wall__part_1 = translate([_wall__part_1_x, _wall__part_1_y, 0], _wall__part_1);

                _wall__part_1 = translate([0,0,0], _wall__part_1);
                result = result.subtract(_wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = _case_xlplate_extrude_9_2_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = _case_pcb_extrude_9_2_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function _shelf_case_fn() {
                    

                // creating part 0 of case _shelf
                let _shelf__part_0 = _outerShelf_case_fn();

                // make sure that rotations are relative
                let _shelf__part_0_bounds = _shelf__part_0.getBounds();
                let _shelf__part_0_x = _shelf__part_0_bounds[0].x + (_shelf__part_0_bounds[1].x - _shelf__part_0_bounds[0].x) / 2
                let _shelf__part_0_y = _shelf__part_0_bounds[0].y + (_shelf__part_0_bounds[1].y - _shelf__part_0_bounds[0].y) / 2
                _shelf__part_0 = translate([-_shelf__part_0_x, -_shelf__part_0_y, 0], _shelf__part_0);
                _shelf__part_0 = rotate([0,0,0], _shelf__part_0);
                _shelf__part_0 = translate([_shelf__part_0_x, _shelf__part_0_y, 0], _shelf__part_0);

                _shelf__part_0 = translate([0,0,0], _shelf__part_0);
                let result = _shelf__part_0;
                
            

                // creating part 1 of case _shelf
                let _shelf__part_1 = _innerShelf_case_fn();

                // make sure that rotations are relative
                let _shelf__part_1_bounds = _shelf__part_1.getBounds();
                let _shelf__part_1_x = _shelf__part_1_bounds[0].x + (_shelf__part_1_bounds[1].x - _shelf__part_1_bounds[0].x) / 2
                let _shelf__part_1_y = _shelf__part_1_bounds[0].y + (_shelf__part_1_bounds[1].y - _shelf__part_1_bounds[0].y) / 2
                _shelf__part_1 = translate([-_shelf__part_1_x, -_shelf__part_1_y, 0], _shelf__part_1);
                _shelf__part_1 = rotate([0,0,0], _shelf__part_1);
                _shelf__part_1 = translate([_shelf__part_1_x, _shelf__part_1_y, 0], _shelf__part_1);

                _shelf__part_1 = translate([0,0,0], _shelf__part_1);
                result = result.subtract(_shelf__part_1);
                
            
                    return result;
                }
            
            

                function _outerShelf_case_fn() {
                    

                // creating part 0 of case _outerShelf
                let _outerShelf__part_0 = _case_pcb_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _outerShelf__part_0_bounds = _outerShelf__part_0.getBounds();
                let _outerShelf__part_0_x = _outerShelf__part_0_bounds[0].x + (_outerShelf__part_0_bounds[1].x - _outerShelf__part_0_bounds[0].x) / 2
                let _outerShelf__part_0_y = _outerShelf__part_0_bounds[0].y + (_outerShelf__part_0_bounds[1].y - _outerShelf__part_0_bounds[0].y) / 2
                _outerShelf__part_0 = translate([-_outerShelf__part_0_x, -_outerShelf__part_0_y, 0], _outerShelf__part_0);
                _outerShelf__part_0 = rotate([0,0,0], _outerShelf__part_0);
                _outerShelf__part_0 = translate([_outerShelf__part_0_x, _outerShelf__part_0_y, 0], _outerShelf__part_0);

                _outerShelf__part_0 = translate([0,0,0], _outerShelf__part_0);
                let result = _outerShelf__part_0;
                
            
                    return result;
                }
            
            

                function _innerShelf_case_fn() {
                    

                // creating part 0 of case _innerShelf
                let _innerShelf__part_0 = _case_inner_pcb_extrude_5_outline_fn();

                // make sure that rotations are relative
                let _innerShelf__part_0_bounds = _innerShelf__part_0.getBounds();
                let _innerShelf__part_0_x = _innerShelf__part_0_bounds[0].x + (_innerShelf__part_0_bounds[1].x - _innerShelf__part_0_bounds[0].x) / 2
                let _innerShelf__part_0_y = _innerShelf__part_0_bounds[0].y + (_innerShelf__part_0_bounds[1].y - _innerShelf__part_0_bounds[0].y) / 2
                _innerShelf__part_0 = translate([-_innerShelf__part_0_x, -_innerShelf__part_0_y, 0], _innerShelf__part_0);
                _innerShelf__part_0 = rotate([0,0,0], _innerShelf__part_0);
                _innerShelf__part_0 = translate([_innerShelf__part_0_x, _innerShelf__part_0_y, 0], _innerShelf__part_0);

                _innerShelf__part_0 = translate([0,0,0], _innerShelf__part_0);
                let result = _innerShelf__part_0;
                
            
                    return result;
                }
            
            

                function _usbcutout_case_case_fn() {
                    

                // creating part 0 of case _usbcutout_case
                let _usbcutout_case__part_0 = _usbcutout_extrude_12_outline_fn();

                // make sure that rotations are relative
                let _usbcutout_case__part_0_bounds = _usbcutout_case__part_0.getBounds();
                let _usbcutout_case__part_0_x = _usbcutout_case__part_0_bounds[0].x + (_usbcutout_case__part_0_bounds[1].x - _usbcutout_case__part_0_bounds[0].x) / 2
                let _usbcutout_case__part_0_y = _usbcutout_case__part_0_bounds[0].y + (_usbcutout_case__part_0_bounds[1].y - _usbcutout_case__part_0_bounds[0].y) / 2
                _usbcutout_case__part_0 = translate([-_usbcutout_case__part_0_x, -_usbcutout_case__part_0_y, 0], _usbcutout_case__part_0);
                _usbcutout_case__part_0 = rotate([0,0,0], _usbcutout_case__part_0);
                _usbcutout_case__part_0 = translate([_usbcutout_case__part_0_x, _usbcutout_case__part_0_y, 0], _usbcutout_case__part_0);

                _usbcutout_case__part_0 = translate([0,0,5], _usbcutout_case__part_0);
                let result = _usbcutout_case__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = _xlbottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = _wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            

                // creating part 4 of case case
                let case__part_4 = _shelf_case_fn();

                // make sure that rotations are relative
                let case__part_4_bounds = case__part_4.getBounds();
                let case__part_4_x = case__part_4_bounds[0].x + (case__part_4_bounds[1].x - case__part_4_bounds[0].x) / 2
                let case__part_4_y = case__part_4_bounds[0].y + (case__part_4_bounds[1].y - case__part_4_bounds[0].y) / 2
                case__part_4 = translate([-case__part_4_x, -case__part_4_y, 0], case__part_4);
                case__part_4 = rotate([0,0,0], case__part_4);
                case__part_4 = translate([case__part_4_x, case__part_4_y, 0], case__part_4);

                case__part_4 = translate([0,0,0], case__part_4);
                result = result.union(case__part_4);
                
            

                // creating part 5 of case case
                let case__part_5 = _usbcutout_case_case_fn();

                // make sure that rotations are relative
                let case__part_5_bounds = case__part_5.getBounds();
                let case__part_5_x = case__part_5_bounds[0].x + (case__part_5_bounds[1].x - case__part_5_bounds[0].x) / 2
                let case__part_5_y = case__part_5_bounds[0].y + (case__part_5_bounds[1].y - case__part_5_bounds[0].y) / 2
                case__part_5 = translate([-case__part_5_x, -case__part_5_y, 0], case__part_5);
                case__part_5 = rotate([0,0,0], case__part_5);
                case__part_5 = translate([case__part_5_x, case__part_5_y, 0], case__part_5);

                case__part_5 = translate([0,0,0], case__part_5);
                result = result.subtract(case__part_5);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        