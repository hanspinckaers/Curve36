function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[157.8001495,-96.5368193],[132.6507584,-105.1964491]]).appendArc([132.030808,-106.4675359],{"radius":1,"clockwise":false,"large":false}).appendPoint([137.5683401,-122.5496968]).appendArc([137.5919044,-122.6285297],{"radius":1,"clockwise":true,"large":false}).appendPoint([141.9260896,-139.6515685]).appendArc([141.9396165,-139.7126214],{"radius":1,"clockwise":true,"large":false}).appendPoint([144.9194022,-155.4813029]).appendArc([145.5989039,-156.2485767],{"radius":1,"clockwise":false,"large":false}).appendPoint([180.8680425,-167.466679]).appendArc([181.0641903,-167.5079861],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.2822485,-169.3602603]).appendArc([198.5173083,-169.414831],{"radius":1,"clockwise":true,"large":false}).appendPoint([216.1487681,-175.8321575]).appendArc([216.3538894,-175.9348099],{"radius":1,"clockwise":true,"large":false}).appendPoint([230.9067942,-185.4474904]).appendArc([232.2926062,-185.1550892],{"radius":1,"clockwise":false,"large":false}).appendPoint([243.3878277,-168.0699463]).appendArc([244.1192722,-167.6203506],{"radius":1,"clockwise":true,"large":false}).appendPoint([251.9239338,-166.7786348]).appendArc([252.7882128,-166.0214186],{"radius":1,"clockwise":false,"large":false}).appendPoint([261.785012,-129.1448161]).appendArc([261.054377,-127.9372402],{"radius":1,"clockwise":false,"large":false}).appendPoint([239.9880343,-122.709057]).appendArc([239.2313404,-121.6687431],{"radius":1,"clockwise":true,"large":false}).appendPoint([240.6205388,-101.8022787]).appendArc([239.6927312,-100.7349582],{"radius":1,"clockwise":false,"large":false}).appendPoint([223.814022,-99.6246106]).appendArc([222.8851394,-98.5748941],{"radius":1,"clockwise":true,"large":false}).appendPoint([223.1068151,-94.3301369]).appendArc([222.1779325,-93.2804205],{"radius":1,"clockwise":false,"large":false}).appendPoint([200.5711599,-91.7695277]).appendArc([199.6412773,-90.7451008],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.7285797,-87.4963443]).appendArc([198.746393,-86.4696338],{"radius":1,"clockwise":false,"large":false}).appendPoint([180.7656505,-86.1557787]).appendArc([179.7482524,-87.1452097],{"radius":1,"clockwise":false,"large":false}).appendPoint([179.7243115,-89.4434111]).appendArc([178.6894663,-90.4323852],{"radius":1,"clockwise":true,"large":false}).appendPoint([159.4700204,-89.7612273]).appendArc([158.4351544,-90.7688004],{"radius":1,"clockwise":false,"large":false}).appendPoint([158.4745478,-95.5831184]).appendArc([157.8001495,-96.5368193],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        