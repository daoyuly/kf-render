/*!
 * 系统项目配置文件.
 */

define( function ( require ) {


    return {

        font: {
            meanline: Math.round( 380 / 1000 * 50 ),
            baseline: Math.round( 800 / 1000 * 50 ),
            baseHeight: 50,
            // 系统字体列表
            list: [
                require( "font/map/kf-ams-main" ),
                require( "font/map/kf-ams-cal" ),
                require( "font/map/kf-ams-frak" ),
                require( "font/map/kf-ams-bb" ),
                require( "font/map/kf-ams-roman" )
            ]
        }

    };

} );
