/**
 * 求和表达式
 * @abstract
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        SummationOperator = require( "operator/summation" );

    return kity.createClass( 'SummationExpression', {

        base: require( "expression/compound" ),

        /**
         * 构造求和表达式
         * @param exp 求和主题表达式
         * @param upOperand 上标
         * @param downOperand 下标
         */
        constructor: function ( superscript, subscript ) {

            this.callBase();
            this.setFlag( "Summation" );

            this.setOperator( new SummationOperator() );

            this.setSuperscript( superscript );
            this.setSubscript( subscript );

        },

        setSuperscript: function ( sup ) {

            this.setOperand( sup, 0 );

        },

        setSubscript: function ( sub ) {

            this.setOperand( sub, 1 );

        }

    } );

} );
