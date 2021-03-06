import {SlideMenuItem} from '@models/vo/slide-menu-item';
import {MenuItem} from 'primeng/api';
import {RouterStoreActions} from '@root-store/router-store';
import {SlideMenuStoreActions} from '@root-store/slide-menu-store/index';

export interface State {
  open: boolean;
  item: SlideMenuItem;
  items: MenuItem[];
}

export const initialState: State = {
  open: false,
  item: {breadcrumb: [], data: null},
  items: [
    {
      label: 'Login',
      icon: 'pi pi-fw pi-check-square',
      // @ts-ignore
      roles: ['roleA'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['login']}));
        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Login'] // breadcrumb
          }
        }));
      }
    },
    {
      label: 'Counter',
      icon: 'pi pi-fw pi-clock',
      // @ts-ignore
      roles: ['roleB'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['counter']}));
        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Counter'] // breadcrumb
          }
        }));
      }
    },
    {
      label: 'Coin',
      icon: 'pi pi-fw pi-wallet',
      // @ts-ignore
      roles: ['roleA', 'roleB'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['coin']}));
        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Coin'] // breadcrumb
          }
        }));
      }
    },
    {
      label: 'Person',
      icon: 'pi pi-fw pi-user-plus',
      // @ts-ignore
      roles: ['roleA'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['person']}));
        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Person'] // breadcrumb
          }
        }));
      }
    },
    {
      label: 'Car',
      icon: 'pi pi-fw pi-shopping-cart',
      // @ts-ignore
      roles: ['roleA'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['car']}));
        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Car'] // breadcrumb
          }
        }));
      }
    },
    {
      label: 'Structure',
      icon: 'pi pi-fw pi-sitemap',
      // @ts-ignore
      roles: ['roleA'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['structure']}));
        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Structure'] // breadcrumb
          }
        }));
      }
    }
  ]
};
