function case_board_extrude_9_2_outline_fn(){
    return new CSG.Path2D([[158.0184108,-95.9328556],[132.015215,-104.8864739]]).appendArc([131.3952646,-106.1575607],{"radius":1,"clockwise":false,"large":false}).appendPoint([137.2580264,-123.1842574]).appendArc([137.2821004,-123.2651007],{"radius":1,"clockwise":true,"large":false}).appendPoint([141.5725862,-140.2638739]).appendArc([141.5860058,-140.3250584],{"radius":1,"clockwise":true,"large":false}).appendPoint([144.524685,-156.0641402]).appendArc([145.2069971,-156.8343186],{"radius":1,"clockwise":false,"large":false}).appendPoint([180.3084734,-167.9015396]).appendArc([180.5094424,-167.9428352],{"radius":1,"clockwise":false,"large":false}).appendPoint([197.6376297,-169.6596072]).appendArc([197.8799187,-169.714929],{"radius":1,"clockwise":true,"large":false}).appendPoint([216.4443545,-176.4718311]).appendArc([216.6551744,-176.5782363],{"radius":1,"clockwise":true,"large":false}).appendPoint([231.0518516,-186.129633]).appendArc([232.4433622,-185.8409846],{"radius":1,"clockwise":false,"large":false}).appendPoint([243.809629,-168.3384685]).appendArc([244.5337195,-167.8896935],{"radius":1,"clockwise":true,"large":false}).appendPoint([253.0321945,-166.9094819]).appendArc([253.8918601,-166.1415571],{"radius":1,"clockwise":false,"large":false}).appendPoint([262.4932991,-128.9782848]).appendArc([261.7709108,-127.7850312],{"radius":1,"clockwise":false,"large":false}).appendPoint([240.510036,-122.2519594]).appendArc([239.7643294,-121.2144386],{"radius":1,"clockwise":true,"large":false}).appendPoint([241.1541991,-101.3383749]).appendArc([240.2263915,-100.2710544],{"radius":1,"clockwise":false,"large":false}).appendPoint([223.5206687,-99.1028763]).appendArc([222.6128378,-97.8947823],{"radius":1,"clockwise":true,"large":false}).appendPoint([223.4488732,-94.0126846]).appendArc([222.5410423,-92.8045907],{"radius":1,"clockwise":false,"large":false}).appendPoint([200.3020282,-91.2494872]).appendArc([199.3941455,-90.0416336],{"radius":1,"clockwise":true,"large":false}).appendPoint([200.0086124,-87.1849668]).appendArc([199.0484256,-85.9748296],{"radius":1,"clockwise":false,"large":false}).appendPoint([180.5351202,-85.6516787]).appendArc([179.5412515,-86.8674226],{"radius":1,"clockwise":false,"large":false}).appendPoint([179.952108,-88.7255699]).appendArc([178.9407922,-89.9408569],{"radius":1,"clockwise":true,"large":false}).appendPoint([159.1241021,-89.2488428]).appendArc([158.0976715,-90.3781033],{"radius":1,"clockwise":false,"large":false}).appendPoint([158.6843737,-94.8574673]).appendArc([158.0184108,-95.9328556],{"radius":1,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 9.2] });
}




                function outerWall_case_fn() {
                    

                // creating part 0 of case outerWall
                let outerWall__part_0 = case_board_extrude_9_2_outline_fn();

                // make sure that rotations are relative
                let outerWall__part_0_bounds = outerWall__part_0.getBounds();
                let outerWall__part_0_x = outerWall__part_0_bounds[0].x + (outerWall__part_0_bounds[1].x - outerWall__part_0_bounds[0].x) / 2
                let outerWall__part_0_y = outerWall__part_0_bounds[0].y + (outerWall__part_0_bounds[1].y - outerWall__part_0_bounds[0].y) / 2
                outerWall__part_0 = translate([-outerWall__part_0_x, -outerWall__part_0_y, 0], outerWall__part_0);
                outerWall__part_0 = rotate([0,0,0], outerWall__part_0);
                outerWall__part_0 = translate([outerWall__part_0_x, outerWall__part_0_y, 0], outerWall__part_0);

                outerWall__part_0 = translate([0,0,0], outerWall__part_0);
                let result = outerWall__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return outerWall_case_fn();
            }

        