import { Vue, Component } from 'vue-property-decorator';
import { CreateElement } from 'vue';
@Component
export default class JSX extends Vue {
  count: number = 0;
  showInfo() {
    this.count++;
    alert('I am JSX');
  }

  render(h: CreateElement) {
    return (<h2 onClick={ this.showInfo }>JSX { this.count }</h2>);
  }
}
