function case_inner_extrude_9_2_outline_fn(){
    return new CSG.Path2D([[157.6180462,-97.0225708],[133.1591931,-105.4444293]]).appendArc([132.5392427,-106.7155161],{"radius":1,"clockwise":false,"large":false}).appendPoint([137.8165896,-122.0420447]).appendArc([137.8397446,-122.1192754],{"radius":1,"clockwise":true,"large":false}).appendPoint([142.2088929,-139.161725]).appendArc([142.222505,-139.2226733],{"radius":1,"clockwise":true,"large":false}).appendPoint([145.2351855,-155.0150093]).appendArc([145.9124564,-155.7799677],{"radius":1,"clockwise":false,"large":false}).appendPoint([181.3156758,-167.1187945]).appendArc([181.5080087,-167.160078],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.7979115,-169.1208249]).appendArc([199.0272497,-169.1747634],{"radius":1,"clockwise":true,"large":false}).appendPoint([215.9122723,-175.320409]).appendArc([216.1128604,-175.4201157],{"radius":1,"clockwise":true,"large":false}).appendPoint([230.7907695,-184.9016476]).appendArc([232.1720483,-184.6063007],{"radius":1,"clockwise":false,"large":false}).appendPoint([243.050084,-167.8555947]).appendArc([243.788297,-167.4052924],{"radius":1,"clockwise":true,"large":false}).appendPoint([251.0366833,-166.6734349]).appendArc([251.9054226,-165.9247809],{"radius":1,"clockwise":false,"large":false}).appendPoint([261.2178048,-129.2784329]).appendArc([260.4805095,-128.0594063],{"radius":1,"clockwise":false,"large":false}).appendPoint([239.5706258,-123.0744788]).appendArc([238.8049634,-122.031983],{"radius":1,"clockwise":true,"large":false}).appendPoint([240.1936106,-102.1734017]).appendArc([239.265803,-101.1060812],{"radius":1,"clockwise":false,"large":false}).appendPoint([224.0672035,-100.0432915]).appendArc([223.1398105,-99.1211784],{"radius":1,"clockwise":true,"large":false}).appendPoint([222.7963388,-94.5819038]).appendArc([221.8689458,-93.6597908],{"radius":1,"clockwise":false,"large":false}).appendPoint([200.8100428,-92.1872087]).appendArc([199.8871016,-91.3102735],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.4537701,-87.7442379]).appendArc([198.4785248,-86.8650191],{"radius":1,"clockwise":false,"large":false}).appendPoint([180.9879669,-86.5597203]).appendArc([179.9894991,-87.3656381],{"radius":1,"clockwise":false,"large":false}).appendPoint([179.4650195,-90.0187745]).appendArc([178.4491046,-90.8242354],{"radius":1,"clockwise":true,"large":false}).appendPoint([159.7613339,-90.171644]).appendArc([158.7301904,-91.0844443],{"radius":1,"clockwise":false,"large":false}).appendPoint([158.288722,-96.1636427]).appendArc([157.6180462,-97.0225708],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 9.2] });
}




                function innerWall_case_fn() {
                    

                // creating part 0 of case innerWall
                let innerWall__part_0 = case_inner_extrude_9_2_outline_fn();

                // make sure that rotations are relative
                let innerWall__part_0_bounds = innerWall__part_0.getBounds();
                let innerWall__part_0_x = innerWall__part_0_bounds[0].x + (innerWall__part_0_bounds[1].x - innerWall__part_0_bounds[0].x) / 2
                let innerWall__part_0_y = innerWall__part_0_bounds[0].y + (innerWall__part_0_bounds[1].y - innerWall__part_0_bounds[0].y) / 2
                innerWall__part_0 = translate([-innerWall__part_0_x, -innerWall__part_0_y, 0], innerWall__part_0);
                innerWall__part_0 = rotate([0,0,0], innerWall__part_0);
                innerWall__part_0 = translate([innerWall__part_0_x, innerWall__part_0_y, 0], innerWall__part_0);

                innerWall__part_0 = translate([0,0,0], innerWall__part_0);
                let result = innerWall__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return innerWall_case_fn();
            }

        