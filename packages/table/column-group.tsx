import { defineComponent, PropType, VNode } from 'vue';
import './index.scss';
import { ColumnType } from './type';
import { turnValue } from '../common'

export default defineComponent({
  name: 'ColumnGroup',
  props: {
    /**
     * 列数据项
     * @default []
     */
    columns: {
      type: Array as PropType<ColumnType[]>,
      default: []
    }
  },
  setup(props) {
    const cols = () => {
      const cols: VNode[] = [];
      let mustInsert = false;
      for (let i = props.columns.length; i >= 0; i--) {
        const width = props.columns[i] && props.columns[i].width;
        if (width || mustInsert) {
          cols.unshift(
            <col
              key={i}
              width={width}
              style={{
                width: turnValue(width),
                minWidth: turnValue(width),
                textAlign: props.columns[i].align
              }}
            />
          );
          mustInsert = true;
        }
      }
      return cols;
    }

    return () => {
      return (
        <colgroup>{cols()}</colgroup>
      )
    };
  },
});
