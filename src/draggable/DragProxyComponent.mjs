import Base from '../component/Base.mjs';

/**
 * @class Neo.draggable.DragProxyComponent
 * @extends Neo.core.Base
 */
class DragProxyComponent extends Base {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.draggable.DragProxyComponent'
         * @protected
         */
        className: 'Neo.draggable.DragProxyComponent',
        /**
         * @member {String} ntype='dragproxy'
         * @protected
         */
        ntype: 'dragproxy'
    }}
}

Neo.applyClassConfig(DragProxyComponent);

export {DragProxyComponent as default};