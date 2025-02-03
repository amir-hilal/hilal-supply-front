// import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { selectTheme } from '@app/store/selectors';

// import { NavigationRailComponent } from './navigation-rail.component';
// import { ActivatedRoute } from '@angular/router';

// describe('NavigationRailComponent', () => {
//     let component: NavigationRailComponent;
//     let fixture: ComponentFixture<NavigationRailComponent>;

//     let store: MockStore;

//     const fakeActivatedRoute = {
//         snapshot: {
//             data: {},
//             paramMap: {
//                 // eslint-disable-next-line @typescript-eslint/no-unused-vars
//                 get(key) {
//                     return 'dashboard';
//                 },
//             },
//         },
//     } as ActivatedRoute;

//     const initialState = {
//         config: {
//             theme: 'light',
//         },
//     };

//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//             imports: [NavigationRailComponent],
//             providers: [
//                 provideMockStore({
//                     initialState,
//                     selectors: [
//                         {
//                             selector: selectTheme,
//                             value: 'light',
//                         },
//                     ],
//                 }),
//                 {
//                     provide: ActivatedRoute,
//                     useValue: {
//                         params: fakeActivatedRoute,
//                     },
//                 },
//             ],
//         }).compileComponents();

//         fixture = TestBed.createComponent(NavigationRailComponent);
//         component = fixture.componentInstance;
//         store = TestBed.inject(MockStore);
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should retrieve the theme from the store', () => {
//         const theme = store.select(selectTheme);
//         expect(theme).toBeTruthy();
//     });

//     it('should render navigation rail component with dark theme after theme change', fakeAsync(() => {
//         store.overrideSelector(selectTheme, 'dark');
//         fixture.detectChanges();

//         store.select(selectTheme).subscribe((theme) => {
//             expect(theme).toBe('dark');
//         });
//     }));

//     it('Should toggle between collapsed and expanded states', () => {
//         const initialExpandedState = component.navigation.expanded();
//         component.navigation.navigationToggle('rail');
//         fixture.detectChanges();

//         expect(component.navigation.expanded()).not.toBe(initialExpandedState);
//     });
// });
