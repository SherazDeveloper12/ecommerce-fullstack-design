import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Filter } from "lucide-react";
import { products } from "../../lib/constant";
import { act } from "react";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
        return products;
    } catch (error) {
        return error.message;
    }
  }
);

export const ProductSlice = createSlice({
  name: "products",
  initialState: {
    Products: [],
    Filters: [],
    SelectedProduct : null,
    status: "idle",
    error: null,
    },
    reducers: {
    setFilters: (state, action) => {
        if(action.payload.type === 'Condition') {

            const existingConditionFilterIndex = state.Filters.findIndex(filter => filter.type === 'Condition');
           
            if(existingConditionFilterIndex !== -1) {    
                if(action.payload.value === 'Any') {
                    state.Filters.splice(existingConditionFilterIndex);
                }
                else {
                    state.Filters[existingConditionFilterIndex].value = action.payload.value;
                }
            }    
            else {
                state.Filters.push({type: action.payload.type, value: action.payload.value});
            }
        }
        if(action.payload.type === 'Brands') {
            console.log('Brand filter payload:', action.payload);
            const existingBrandFilterIndex = state.Filters.findIndex(filter => filter.type === 'Brands');
            if(existingBrandFilterIndex !== -1) {
                if(action.payload.checked === false) {
                state.Filters[existingBrandFilterIndex].value = 
                    state.Filters[existingBrandFilterIndex].value.filter(brand => brand !== action.payload.value);
                   if(state.Filters[existingBrandFilterIndex].value.length === 0) {
                    state.Filters.splice(existingBrandFilterIndex, 1);
                   }
                }
                else {
                state.Filters[existingBrandFilterIndex].value = [...state.Filters[existingBrandFilterIndex].value, action.payload.value];
                }
            }
            else {
                state.Filters.push({type: action.payload.type, value: [action.payload.value]});
            }
        }
        if(action.payload.type === 'Features') {
            const existingFeatureFilterIndex = state.Filters.findIndex(filter => filter.type === 'Features');
            if(existingFeatureFilterIndex !== -1) {
                if(action.payload.checked === false) {
                state.Filters[existingFeatureFilterIndex].value = 
                    state.Filters[existingFeatureFilterIndex].value.filter(feature => feature !== action.payload.value);
                     if(state.Filters[existingFeatureFilterIndex].value.length === 0) {
                    state.Filters.splice(existingFeatureFilterIndex, 1);
                   }
                }
                else {
                state.Filters[existingFeatureFilterIndex].value = [...state.Filters[existingFeatureFilterIndex].value, action.payload.value];
                }
            }
            else {
                state.Filters.push({type: action.payload.type, value: [action.payload.value]});
            }
        }
        if(action.payload.type === 'Rating') {
            console.log('Rating filter payload:', action.payload);
            const existingBrandFilterIndex = state.Filters.findIndex(filter => filter.type === 'Rating');
            if(existingBrandFilterIndex !== -1) {
                if(action.payload.checked === false) {
                state.Filters[existingBrandFilterIndex].value = 
                    state.Filters[existingBrandFilterIndex].value.filter(brand => brand !== action.payload.value);
                   if(state.Filters[existingBrandFilterIndex].value.length === 0) {
                    state.Filters.splice(existingBrandFilterIndex, 1);
                   }
                }
                else {
                state.Filters[existingBrandFilterIndex].value = [...state.Filters[existingBrandFilterIndex].value, action.payload.value];
                }
            }
            else {
                state.Filters.push({type: action.payload.type, value: [action.payload.value]});
            }
        }
        
    }
  },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.Products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
});

export const { setFilters } = ProductSlice.actions;