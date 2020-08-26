<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Listing;

class ListingController extends Controller
{
    public function get_listing_api(Listing $listing)
    {
    	return $listing->toJson();
    }
}
